import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { StripeContext } from 'context/stripe/index';
import PricesCards from 'components/PricesCards/index';

const Dashboard = () => {
  const { hasActiveSubscription } = useContext(StripeContext);

  return (
    <>
      <Typography variant="h2" sx={{ mb: { xs: 2, md: 3, lg: 5, xl: 8 } }}>
        {hasActiveSubscription ? 'Sie verfügen über ein aktives Abonnement.' : 'Sie verfügen über kein aktives Abonnement'}
      </Typography>
      <PricesCards sx={{ px: { xl: 10 } }} />
    </>
  );
};

export default Dashboard;
