import { UserContext } from 'context/user/index';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Firebase
import { db, auth, app } from 'services/firebase';

import { getFunctions, httpsCallable } from 'firebase/functions';
import { query, where, getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const StripeContext = createContext(null);

const getSubscriptions = async (userId) => {
  if (userId) {
    const checkoutSessionRef = collection(db, 'users', userId, 'subscriptions');
    // const allDocs = await getDocs(query(checkoutSessionRef));
    const snap = await getDocs(query(checkoutSessionRef, where('status', 'in', ['trialing', 'active'])));

    const docsDataResolved = snap.docs.map(async (doc) => {
      const data = doc.data();
      return { priceId: data.price?.id, productId: data.product?.id };
    });

    const resolvedDocs = await Promise.all(docsDataResolved);

    return resolvedDocs;
  }
};

const productConfig = {
  // Test
  prod_RS5Mwa8DhYvhGA: {
    maxCalculations: 1
    // prices: ['price_1QZBBaFGa3DH0yAqy766ghH0']
  },
  // Pro
  prod_RFgQbyJhgjwWPa: {
    maxCalculations: 2
    // prices: ['price_1QUSccFGa3DH0yAqeNCcleFW', 'price_1QNB4UFGa3DH0yAqgxE3OQ0B', 'price_1QNB5JFGa3DH0yAqcJCNddLm']
  },
  // Premium
  prod_RND1xoBl19Y4PT: {
    maxCalculations: 1
    // prices: ['price_1QUSazFGa3DH0yAqzUU4v4U9', 'price_1QUSazFGa3DH0yAqPZk0IBrb', 'price_1QUSazFGa3DH0yAq85zvOhaH']
  },
  prod_RjffeKdrDoeGcS: {
    maxCalculations: -1
  }
};

export const StripeContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { user, formsData } = useContext(UserContext);
  const [loadingCreateSubscription, setLoadingCreateSubscription] = useState(false);
  const [loadingGetSubscriptionStatus, setLoadingGetSubscriptionStatus] = useState(false);

  const [activeSubscriptions, setActiveSubscriptions] = useState([]);
  const hasActiveSubscription = useMemo(() => activeSubscriptions?.length > 0, [activeSubscriptions]);
  const maxCalculations = useMemo(() => {
    if (hasActiveSubscription) {
      const activeProduct = activeSubscriptions[0].productId;
      return productConfig[activeProduct].maxCalculations;
    }
  }, [activeSubscriptions, hasActiveSubscription]);
  const canCreateNewCalulation = useMemo(() => {
    if (hasActiveSubscription) {
      const isInfinite = maxCalculations === -1;

      return isInfinite || maxCalculations > Object.keys(formsData).length;
    }
  }, [formsData, hasActiveSubscription, maxCalculations]);

  const updateSubscriptions = useCallback(async () => {
    setLoadingGetSubscriptionStatus(true);
    const subs = await getSubscriptions(user.uid);

    setActiveSubscriptions(subs);
    setLoadingGetSubscriptionStatus(false);
  }, [user.uid]);

  const createSubscription = useCallback(
    async (priceId = '') => {
      setLoadingCreateSubscription(true);

      if (user.uid) {
        const checkoutSessionRef = collection(db, 'users', user.uid, 'checkout_sessions');

        const docRef = await addDoc(checkoutSessionRef, {
          price: priceId,
          allow_promotion_codes: true,
          success_url: `${window.location.origin}/office/billing`,
          cancel_url: `${window.location.origin}/office/billing`
        });

        return new Promise((resolve, reject) => {
          const unsubscribe = onSnapshot(docRef, (snap) => {
            const { error, url } = snap.data() || {};
            if (error) {
              unsubscribe();
              console.log('error', error);
              reject(new Error(`An error occurred: ${error.message}`));
              setLoadingCreateSubscription(false);
            }
            if (url) {
              unsubscribe();
              resolve(url);
              setLoadingCreateSubscription(false);
            }
          });
        });
      } else {
        setLoadingCreateSubscription(false);
        navigate('/login');
      }
    },
    [navigate, user.uid]
  );

  const getPortalUrl = async () => {
    const user = auth.currentUser;

    let dataWithUrl;
    try {
      const functions = getFunctions(app, 'europe-west3');
      const functionRef = httpsCallable(functions, 'ext-firestore-stripe-payments-createPortalLink');
      const { data } = await functionRef({
        customerId: user?.uid,
        returnUrl: `${window.location.origin}/office/billing`
      });

      // Add a type to the data
      dataWithUrl = data;
    } catch (error) {
      console.error(error);
    }

    return new Promise((resolve, reject) => {
      if (dataWithUrl?.url) {
        resolve(dataWithUrl.url);
      } else {
        reject(new Error('No url returned'));
      }
    });
  };

  useEffect(() => {
    user.uid && updateSubscriptions();
  }, [user.uid, updateSubscriptions]);

  return (
    <StripeContext.Provider
      value={{
        createSubscription,
        hasActiveSubscription,
        activeSubscriptions,
        loadingCreateSubscription,
        loadingGetSubscriptionStatus,
        getPortalUrl,
        canCreateNewCalulation,
        maxCalculations
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};
