import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Grid } from '@mui/material';

const Imprint = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="flex-start"
      sx={{
        overflow: 'hidden',
        px: { xs: 4, md: 10, lg: 20, xl: 30 },
        pb: { xs: 6, md: 20, lg: 25 }
      }}
      gap={4}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          pt: { xs: 6, md: 20, lg: 25 }
        }}
      >
        <Typography variant="h1" sx={{ mb: { xs: 2, sm: 3, md: 4, lg: 6 }, fontWeight: 700, fontSize: { xs: 24, sm: 32, md: 48, lg: 64 } }}>
          Datenschutz
          <Typography component="span" variant="h2" sx={{ color: theme.palette.secondary[500], display: 'block' }}>
            Kalkulatrix
          </Typography>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          mb: { xs: 2, md: 4, lg: 6 }
        }}
      >
        <Typography variant="body2">
          Felix Adel
          <br />
          Adel Consulting
          <br />
          Geschwister-Scholl-Str. 3<br />
          18069 Rostock
          <br />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Imprint;
