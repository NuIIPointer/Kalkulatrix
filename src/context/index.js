import React from 'react';
import { combineComponents } from './combineComponents';

import { UserContextProvider } from './user';
import { AdminContextProvider } from './admin';
import { NavigationContextProvider } from './navigation';
import { StripeContextProvider } from './stripe';

const providers = [UserContextProvider, NavigationContextProvider, StripeContextProvider, AdminContextProvider];
export const AppContextProvider = combineComponents(...providers);

export const AllContextsProvider = ({ children }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};
