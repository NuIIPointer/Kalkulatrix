import React, { useRef, useEffect } from 'react';
import { Grid, Typography, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import Logo from 'components/Logo/Logo';

const SectionHeadlineText = ({ isActive }) => {
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(30) },
          pr: { xs: theme.spacing(4), md: 0 },
          py: { xs: theme.spacing(2), md: theme.spacing(20), lg: theme.spacing(25) }
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
        <Typography variant="body2" sx={{ mb: { sx: 2, md: 5, lg: 6 }, fontSize: { xs: 16, sm: 18, md: 22 }}}>
          Der Konkurrenz einen Schritt voraus. Berechnen Sie präzise Stundensätze und senken Sie Mitarbeiterkosten. Steigern Sie Effizienz,
          maximieren Sie Gewinne. Einfache Anwendung – sofortige Ergebnisse.
        </Typography>
        <Stack gap={2} sx={{ flexDirection: "row" }}>
          <Button variant="outlined" color="primary">Video ansehen</Button>
          <Button variant="contained" color="primary">Kostenlos testen</Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={5}>
        image
      </Grid>
    </Grid>
  );
};

export default SectionHeadlineText;
