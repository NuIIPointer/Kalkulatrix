import React from 'react';
import { Grid, Typography, Stack, Button } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

const SectionHeadlineText = () => {
  return (
    <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          pl: { xs: 4, md: 10, lg: 20, xl: 30 },
          pr: { xs: 4, md: 0 },
          py: { xs: 6, md: 20, lg: 25 }
        }}
      >
        <Typography variant="h1" sx={{ mb: 1, fontWeight: 700, fontSize: { xs: 24, sm: 32, md: 48, lg: 64 } }}>
          Kalkulatrix
        </Typography>
        <Typography variant="h2" component="p" sx={{ fontWeight: 500, fontSize: { xs: 18, sm: 24, md: 28, lg: 36 }, minHeight: '3em' }}>
          <TypeAnimation
            sequence={[
              'Optimieren Sie Stundensätze,',
              1000,
              'Optimieren Sie Personalkosten,',
              1000,
              'Optimieren Sie den Preis für Ihre Kunden,',
              1000,
              'Optimieren Sie Ihren Gewinn.',
              2000
            ]}
            wrapper="span"
            speed={75}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </Typography>
        <Typography variant="body2" sx={{ mb: { xs: 2, md: 5, lg: 6 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
          Der Konkurrenz einen Schritt voraus. Berechnen Sie präzise Stundensätze und senken Sie Mitarbeiterkosten. Steigern Sie Effizienz,
          maximieren Sie Gewinne. Einfache Anwendung – sofortige Ergebnisse.
        </Typography>
        <Stack gap={2} sx={{ flexDirection: 'row' }}>
          <Button variant="outlined" color="primary">
            Video ansehen
          </Button>
          <Button variant="contained" color="primary">
            Kostenlos testen
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={5}>
        {/* <img src='https://placehold.co/1000x700/EEE/31343C' alt="Kalkulatrix Anwendung" /> */}
      </Grid>
    </Grid>
  );
};

export default SectionHeadlineText;
