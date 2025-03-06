import React from 'react';
import EditProfile from './EditProfile';
import EditCredentials from './EditCredentials';
import SubscriptionInfo from './SubscriptionInfo';

const Dashboard = () => {
  return (
    <>
      <EditProfile />
      <EditCredentials />
      <SubscriptionInfo />
    </>
  );
};

export default Dashboard;
