import React from 'react';
import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconChip from 'components/IconChip';
import { AutoGraph, CalendarToday, Wallet } from '@mui/icons-material';
import SectionChip from 'components/SecitonChip';

import dashboardScreenshot from 'assets/images/content/screenshot_dashboard.png';
import produktivitaetssteigerung from 'assets/images/content/produktivitaetssteigerung.svg';
import iconPlus25 from 'assets/images/content/icon_plus_25.svg';

const SectionGewinn = () => {
  const theme = useTheme();
  const items = [
    {
      title: 'Alle Ausgaben im Überblick',
      icon: AutoGraph
    },
    {
      title: 'Kostenplanung neuer Mitarbeiter',
      icon: Wallet
    },
    {
      title: 'Erfassung jährlicher Gewinnziele',
      icon: CalendarToday
    },
    {
      title: 'Optimierung Ihrer Produktivität',
      icon: CalendarToday
    }
  ];
  const itemsRendered = items.map((item, i) => (
    <Grid
      item
      xs={12}
      sm={6}
      lg={3}
      key={i}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
        gap: 2,
        mb: { xs: 2, sm: 4, lg: 0 }
      }}
    >
      <IconChip icon={item.icon} colorPreset="primaryLight" sizePreset="medium" cardSx={{ flexShrink: 0 }} shadowPreset="small" />
      <Typography variant="body2" sx={{ mb: 0, fontWeight: 600 }}>
        {item.title}
      </Typography>
    </Grid>
  ));

  return (
    <>
      <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(24) },
            pr: { xs: theme.spacing(4), md: 0 },
            py: { xs: theme.spacing(2), md: theme.spacing(20), lg: theme.spacing(25) }
          }}
        >
          <SectionChip colorPreset="primaryLight" sx={{ mx: 'auto', mb: 2, mr: 'auto', width: 'auto' }}>
            Kalkulation
          </SectionChip>
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, fontSize: { xs: 22, sm: 28, md: 36, lg: 48 } }}>
            Setzen Sie auf Gewinn, nicht auf Spekulation
          </Typography>
          <Typography variant="body2" sx={{ mb: { xs: 2, lg: 3 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
            Schluss mit dem Rätselraten bei der Preisgestaltung! Mit Kalkulatrix transformieren Sie Ihre Konstenstruktur in klare,
            gewinnorientierte Stundensätze.
          </Typography>
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 5, lg: 6 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
            Mit der intuitiven Eingabe Ihrer Ausgaben und Gewinnziele, ermitteln wir den für Sie optimalen Stundensatzverkaufssatz. So
            steigern Sie Ihren Gewinn und Ihre Effizienz.
          </Typography>
          <Button variant="contained" color="primary">
            Jetzt starten
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: { xs: 6, md: 0 },
              marginBottom: { xs: 12, md: 0 },
              paddingInline: { xs: 4, md: 0 }
            }}
          >
            <Box sx={{ position: 'relative', paddingRight: { md: 6, lg: 16 } }}>
              <Box
                as="img"
                src={produktivitaetssteigerung}
                alt="Kalkulatrix Anwendung"
                sx={{ position: 'absolute', top: '-60px', right: { xs: '15%', lg: '20%', xl: '25%' }, zIndex: 1, width: '250px' }}
              />
              <Box
                as="img"
                src={iconPlus25}
                alt="Kalkulatrix Anwendung"
                sx={{
                  position: 'absolute',
                  bottom: { xs: '-25px', md: '-50px' },
                  right: { xs: '0', sm: '-30px', md: '6%' },
                  zIndex: 1,
                  width: { xs: '80px', md: '125px' }
                }}
              />
              <Box
                as="img"
                src={dashboardScreenshot}
                alt="Kalkulatrix Anwendung"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '700px', lg: '100%' },
                  position: 'relative',
                  borderRadius: { xs: 2, md: 4 },
                  overflow: 'hidden',
                  boxShadow: theme.customShadows.z1,
                  objectFit: 'cover',
                  border: `1px solid ${theme.palette.grey[300]}`
                }}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          px: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(6), xl: theme.spacing(12) },
          mt: { xs: 8, md: 12, lg: 0 },
          mb: { xs: 0, md: 2, lg: 6 }
        }}
        columnSpacing={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
      >
        {itemsRendered}
      </Grid>
    </>
  );
};

export default SectionGewinn;
