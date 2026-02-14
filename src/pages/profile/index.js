import React from 'react';
import EditProfile from './EditProfile';
import EditCredentials from './EditCredentials';
import SubscriptionInfo from './SubscriptionInfo';
import AdminAccessSettings from './AdminAccessSettings';

const Dashboard = () => {
  return (
    <>
      <EditProfile />
      <EditCredentials />
      <SubscriptionInfo />
      <AdminAccessSettings />
    </>
  );
};

export default Dashboard;
