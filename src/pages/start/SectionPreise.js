import React from 'react';
import { Grid, Typography, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PricesCards from 'components/PricesCards/index';

const SectionPreise = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      flexDirection="column"
      sx={{ px: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(24) }, py: { xs: 4, md: 6 } }}
    >
      <Typography
        textAlign={{ xs: 'left', md: 'center' }}
        variant="h2"
        sx={{ mb: { xs: 0, md: 2 }, fontWeight: 700, fontSize: { xs: 22, sm: 28, md: 36, lg: 48 } }}
      >
        Unsere Preise
      </Typography>
      <Typography
        variant="bod2"
        textAlign={{ xs: 'left', md: 'center' }}
        sx={{ mb: 1, fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
      >
        Wählen Sie ein Paket, welches zu Ihren individuellen Anforderungen passt.
      </Typography>
      <Stack alignItems={{ xs: 'flex-start', md: 'center' }} sx={{ mb: { xs: 3, md: 4, lg: 6 } }}>
        <Button href="/register" variant="contained" color="primary" size="large">
          Hier können Sie Kalkulatrix kostenlos testen
        </Button>
      </Stack>
      <Stack>
        <PricesCards />
      </Stack>
    </Grid>
  );
};

export default SectionPreise;
