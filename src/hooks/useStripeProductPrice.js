import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'services/firebase';

const monthsPerInterval = { day: 1 / 30, week: 12 / 52, month: 1, year: 12 };

// Liest den aktiven Preis eines Produkts aus Firestore (von der Stripe-Extension synchronisiert)
// und rechnet ihn auf einen Monatsbetrag um.
const useStripeProductPrice = (productId) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(!!productId);

  useEffect(() => {
    if (!productId) return;
    let cancelled = false;

    const fetchPrice = async () => {
      setLoading(true);
      setPrice(null);
      try {
        const snap = await getDocs(query(collection(db, 'products', productId, 'prices'), where('active', '==', true)));
        // Nur Abo-Preise – einmalige Preise haben kein Intervall und würden falsch umgerechnet
        const activePrice = snap.docs.find((doc) => doc.data().type === 'recurring');

        if (!cancelled && activePrice) {
          const { unit_amount, interval = 'month', interval_count = 1 } = activePrice.data();
          const months = (monthsPerInterval[interval] ?? 1) * interval_count;
          setPrice({
            stripePriceId: activePrice.id,
            monthlyPrice: Math.round(unit_amount / months) / 100
          });
        }
      } catch (error) {
        console.error('Error loading price for product', productId, error);
      } finally {
        !cancelled && setLoading(false);
      }
    };

    fetchPrice();
    return () => {
      cancelled = true;
    };
  }, [productId]);

  return { ...price, loading };
};

export default useStripeProductPrice;
