import { createContext, useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { StatusCodes } from 'http-status-codes';
import dayjs from 'dayjs';

// Firebase
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  signOut,
  db,
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'services/firebase';
import { setPersistence, browserLocalPersistence, inMemoryPersistence } from 'firebase/auth';

import { setDoc, doc, getDoc, getDocs, updateDoc, addDoc, collection, query, where, documentId, deleteDoc } from 'firebase/firestore';

const initialUser = {
  uid: null,
  email: null,
  firstName: null,
  lastName: null,
  displayName: null,
  company: null,
  userFormIds: []
};

const initialFormsData = {};
const initialStatusCodes = {
  loadingUser: null,
  createUser: null,
  setUser: null,
  loadingForm: null,
  createForm: null,
  saveForm: null
};

const initialLayout = {
  drawerStatus: null
};

export const getForms = async (formIds) => {
  const tmpForms = {};
  const snap = await getDocs(query(collection(db, 'forms'), where(documentId(), 'in', formIds)));

  snap.docs?.forEach((doc) => {
    const docData = doc.data();
    tmpForms[doc.id] = {
      id: doc.id,
      title: docData.title,
      type: docData.type,
      values: docData.values ? JSON.parse(docData.values) : {},
      creationDate: docData.creationDate,
      lastSaved: docData.lastSaved
    };
  });
  return tmpForms;
};

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const mounted = useRef();
  const [user, setUser] = useState(initialUser);
  const [formsData, setFormsData] = useState(initialFormsData);
  const [clientFormsData, setClientFormsData] = useState(initialFormsData);
  const [activeFormId, setActiveFormId] = useState(null);
  const activeFormData = useMemo(() => ({ ...clientFormsData, ...formsData }[activeFormId]), [activeFormId, clientFormsData, formsData]);
  const isForeignForm = !Object.keys(formsData).includes(activeFormId);

  const [drawerStatus, setDrawerStatus] = useState(initialLayout.drawerStatus);

  const [status_loadingUser, setLoadingUser] = useState(initialStatusCodes.loadingUser);
  const [status_createUser, setCreateUser] = useState(initialStatusCodes.createUser);
  const [status_authUser, setAuthUser] = useState(initialStatusCodes.setUser);
  const [status_loadingForm, setLoadingForm] = useState(initialStatusCodes.loadingForm);
  const [status_createForm, setCreateForm] = useState(initialStatusCodes.createForm);
  const [status_saveForm, setSaveForm] = useState(initialStatusCodes.saveForm);

  const requestStatusCodes = useMemo(() => {
    return {
      loadingUser: status_loadingUser,
      createUser: status_createUser,
      authUser: status_authUser,
      loadingForm: status_loadingForm,
      createForm: status_createForm,
      saveForm: status_saveForm
    };
  }, [status_loadingUser, status_saveForm, status_createUser, status_authUser, status_loadingForm, status_createForm]);

  const logoutUser = useCallback(
    ({ toPage } = {}) => {
      signOut(auth);
      setUser(initialUser);
      navigate(toPage || '/');
    },
    [navigate]
  );

  const getUserDoc = useCallback(async (uid) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();

      return userData;
    } else {
      // docSnap.data() will be undefined in this case
      return {};
    }
  }, []);

  const loginUser = useCallback(
    async ({ uid, email, displayName }) => {
      const userDoc = await getUserDoc(uid);

      await setUser({
        ...initialUser,
        email: email,
        uid: uid,
        displayName: displayName,
        ...userDoc
      });
    },
    [getUserDoc]
  );

  const reloadUser = useCallback(async () => {
    const userDoc = await getUserDoc(user.uid);

    await setUser({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      ...userDoc
    });
  }, [user.email, user.uid, user.displayName, getUserDoc]);

  const authUser = useCallback(
    async ({ emailCredentials }) => {
      const { email, password, keepSignedIn } = emailCredentials;
      setAuthUser(StatusCodes.PROCESSING);
      const persistance = keepSignedIn ? browserLocalPersistence : inMemoryPersistence;
      await setPersistence(auth, persistance);
      try {
        const userAuth = await signInWithEmailAndPassword(auth, email, password);
        await loginUser({ email: userAuth.user.email, uid: userAuth.user.uid, displayName: userAuth.user.displayName });
        setAuthUser(StatusCodes.OK);

        return true;
      } catch (err) {
        console.log(err);
        // alert('Login fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.');
        return false;
      }
    },
    [loginUser]
  );

  const changeUser = useCallback(
    async ({ firstName, lastName, company }) => {
      try {
        const displayName = `${firstName} ${lastName}`;
        if (displayName !== user.displayName) {
          await updateProfile(auth.currentUser, {
            displayName: displayName
          });
        }
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
          firstName: firstName,
          lastName: lastName,
          company: company || ''
        });
        await setUser({
          ...user,
          firstName: firstName,
          lastName: lastName,
          company: company
        });
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
    [user]
  );

  const changeEmail = useCallback(
    async ({ email }) => {
      try {
        if (email && email !== user.email) {
          await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            email: email
          });
          await updateEmail(auth.currentUser, email);
          await setUser({
            ...user,
            email: email
          });

          logoutUser();

          return true;
        }
        return false;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
    [logoutUser, user]
  );

  const changePassword = useCallback(async ({ password }) => {
    try {
      await updatePassword(auth.currentUser, password);
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  const resetPasswordMail = useCallback(async (email) => {
    try {
      const successful = await sendPasswordResetEmail(auth, email);
      return successful;
    } catch (error) {
      return false;
    }
  }, []);

  const registerUser = useCallback(
    async (formData) => {
      const { email, password, firstName, lastName, company } = formData;
      setCreateUser(StatusCodes.PROCESSING);

      await createUserWithEmailAndPassword(auth, email, password)
        // returns  an auth object after a successful authentication
        // userAuth.user contains all our user details
        .then((userCredential) => {
          const displayName = `${firstName} ${lastName}`;
          return updateProfile(userCredential.user, {
            displayName: displayName
          })
            .then(() => {
              setDoc(doc(db, 'users', userCredential.user.uid), {
                firstName: firstName,
                lastName: lastName,
                company: company || ''
              });
            })
            .then(() => {
              // Dispatch the user information for persistence in the redux state
              authUser({
                emailCredentials: {
                  email: email,
                  password: password
                }
              });
              setCreateUser(StatusCodes.OK);
            });
        })
        .catch((error) => {
          setCreateUser(StatusCodes.BAD_REQUEST);
          console.error('user not updated', error);
        });

      return status;
    },
    [authUser]
  );

  const addUserForm = useCallback(
    async (formId) => {
      if (user.uid) {
        await setDoc(
          doc(db, 'users', user.uid),
          {
            userFormIds: [...user.userFormIds, formId]
          },
          { merge: true }
        );
      }
    },
    [user.uid, user.userFormIds]
  );

  const removeUserForm = useCallback(
    async (formId) => {
      if (user.uid) {
        await setDoc(
          doc(db, 'users', user.uid),
          {
            userFormIds: [...user.userFormIds.filter((id) => id !== formId)]
          },
          { merge: true }
        );

        await reloadUser();
      }
    },
    [user.uid, user.userFormIds, reloadUser]
  );

  // FORMS

  const deleteForm = useCallback(
    async (formId) => {
      await deleteDoc(doc(db, 'forms', formId));
      await removeUserForm(formId);
    },
    [removeUserForm]
  );

  const createForm = useCallback(
    async ({ title, type, initialData }) => {
      setCreateForm(StatusCodes.PROCESSING);
      const docRef = await addDoc(collection(db, 'forms'), {
        title: title,
        type: type,
        creationDate: dayjs().valueOf(),
        values: JSON.stringify(initialData || {})
      });

      await addUserForm(docRef.id);
      await reloadUser();
      setCreateForm(StatusCodes.OK);
      return docRef.id;
    },
    [addUserForm, reloadUser]
  );

  const copyForm = useCallback(
    async ({ formId, title }) => {
      const formToCopy = formsData[formId];
      if (formToCopy) {
        return createForm({ title, initialData: formToCopy.values, type: formToCopy.type });
      }

      return false;
    },
    [createForm, formsData]
  );

  const updateForms = useCallback(async () => {
    setLoadingForm(StatusCodes.PROCESSING);
    if (user.userFormIds?.length > 0) {
      const forms = await getForms(user.userFormIds);
      setFormsData(forms);
    } else {
      setFormsData({});
    }
    setLoadingForm(StatusCodes.OK);
  }, [user.userFormIds]);

  const saveForm = useCallback(
    async (values) => {
      setSaveForm(StatusCodes.PROCESSING);
      if (activeFormId) {
        await setDoc(
          doc(db, 'forms', activeFormId),
          {
            title: values.formTitle,
            lastSaved: dayjs().valueOf(),
            values: JSON.stringify({ ...values, lastChanged: dayjs().valueOf() }) || ''
          },
          { merge: true }
        );
        await updateForms();
      }
      setSaveForm(StatusCodes.OK);
    },
    [activeFormId, updateForms]
  );

  useEffect(() => {
    updateForms();
  }, [updateForms]);

  useEffect(() => {
    const initialize = async () => {
      await onAuthStateChanged(auth, async (userAuth) => {
        setLoadingUser(StatusCodes.PROCESSING);
        const enable = true;
        if (enable && userAuth) {
          await loginUser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
          });
        }
        setLoadingUser(StatusCodes.OK);
      });
    };

    initialize();
  }, [loginUser]);

  useEffect(() => {
    if (matchDownMD) {
      setDrawerStatus('closed');
    } else {
      setDrawerStatus('opened');
    }
  }, [matchDownMD]);

  useEffect(() => {
    mounted.current = true;

    return () => (mounted.current = false);
  }, [mounted]);

  return (
    <UserContext.Provider
      value={{
        logoutUser,
        loginUser,
        authUser,
        registerUser,
        user,
        setUser,
        changeUser,
        changeEmail,
        changePassword,
        resetPasswordMail,
        addUserForm,
        reloadUser,
        formsData,
        createForm,
        copyForm,
        deleteForm,
        saveForm,
        activeFormId,
        activeFormData,
        setActiveFormId,
        requestStatusCodes,
        drawerStatus,
        setDrawerStatus,
        setClientFormsData,
        isForeignForm
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
