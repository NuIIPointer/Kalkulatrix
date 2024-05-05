import { createContext, useState, useCallback, useEffect, useMemo, useContext } from 'react';
import { StatusCodes } from 'http-status-codes';

// Firebase
import { db } from 'services/firebase';

import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { UserContext, getForms } from 'context/user/index';

const initialStatusCodes = {
  loadingUsersdata: null
};

export const AdminContext = createContext(null);
// eslint-disable-next-line react/prop-types
export const AdminContextProvider = ({ children }) => {
  const [status_clientsData, setLoadingClientsData] = useState(initialStatusCodes.loadingUsersdata);
  const [clientsData, setClientsData] = useState(initialStatusCodes.loadingUsersdata);
  const clientsFormConfigs = useMemo(() => {
    const forms = {};
    clientsData?.forEach((client) => {
      client.usersFormData.forEach((form) => {
        forms[form.id] = form;
      });
    });

    return forms;
  }, [clientsData]);
  const { user, setClientFormsData } = useContext(UserContext);

  useEffect(() => {
    if (clientsFormConfigs) {
      setClientFormsData(clientsFormConfigs);
    }
  }, [clientsFormConfigs, setClientFormsData]);

  const requestStatusCodes = useMemo(() => {
    return {
      loadingUsersData: status_clientsData
    };
  }, [status_clientsData]);

  const getUserDoc = useCallback(async (uid) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();

      return { uid: uid, ...userData };
    } else {
      // docSnap.data() will be undefined in this case
      return {};
    }
  }, []);

  const fetchUserData = useCallback(async () => {
    const usersCollection = collection(db, 'users');
    const snapshot = await getDocs(usersCollection);
    const usersDataPromises = snapshot.docs.map((doc) => getUserDoc(doc.id));

    return await Promise.all(usersDataPromises);
  }, [getUserDoc]);

  useEffect(() => {
    if (user.isAdmin) {
      const doTheStuff = async () => {
        setLoadingClientsData(StatusCodes.PROCESSING);
        try {
          const clientsUserData = await fetchUserData();
          const formsToGet = new Set();
          clientsUserData.forEach((el) => el.userFormIds?.length > 0 && el.userFormIds.forEach((formId) => formsToGet.add(formId)));
          const fetchedForms = await getForms([...formsToGet]);
          const clientsWithFormData = clientsUserData.map((user) => {
            return {
              ...user,
              usersFormData: user.userFormIds?.map((formId) => fetchedForms[formId]).filter(Boolean)
            };
          });

          setLoadingClientsData(StatusCodes.OK);
          setClientsData(clientsWithFormData);
        } catch (error) {
          setLoadingClientsData(500);
        }
      };
      doTheStuff();
    }
  }, [fetchUserData, user.isAdmin]);

  return (
    <AdminContext.Provider
      value={{
        requestStatusCodes,
        clientsData,
        clientsFormConfigs
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
