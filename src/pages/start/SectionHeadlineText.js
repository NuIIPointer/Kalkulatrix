import React from 'react';
import { Grid, Typography, Stack, Button, Box } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

import macbookImage from 'assets/images/content/macbook_mockup_dashboard_2.png';

const SectionHeadlineText = () => {
  const scrollIntoViewWithOffset = (selector, offset) => {
    window.scrollTo({
      behavior: 'smooth',
      top: document.querySelector(selector).getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset
    });
  };

  return (
    <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
      <Grid item xs={12} md={6}>
        <Box
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
            Der Konkurrenz einen Schritt voraus. Berechnen Sie präzise Stundensätze und senken Sie Mitarbeiterkosten. Steigern Sie
            Effizienz, maximieren Sie Gewinne. Einfache Anwendung - sofortige Ergebnisse.
          </Typography>
          <Stack gap={2} sx={{ flexDirection: 'row' }}>
            <Button variant="outlined" color="primary" onClick={() => scrollIntoViewWithOffset('#webinarDemo', 100)}>
              Demo buchen
            </Button>
            <Button href="/login" variant="contained" color="primary">
              Jetzt starten
            </Button>
          </Stack>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock: { xs: 4, sm: 6, md: 8, lg: 0 } }}
      >
        <Box
          as="img"
          src={macbookImage}
          alt="Bildschirmfoto der Stundensatzkalkulation"
          sx={{ width: '100%', maxWidth: { xs: '700px', lg: '100%' }, padding: { md: 6 } }}
        />
      </Grid>
    </Grid>
  );
};

export default SectionHeadlineText;
