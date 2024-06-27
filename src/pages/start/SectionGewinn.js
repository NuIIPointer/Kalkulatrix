import React, { useRef, useEffect } from 'react';
import { Grid, Typography, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import Logo from 'components/Logo/Logo';
import IconChip from 'components/IconChip';
import { AutoGraph, CalendarToday, Wallet } from '@mui/icons-material';
import SectionChip from 'components/SecitonChip';

const SectionGewinn = ({ isActive }) => {
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
        mb: { xs: 2, sm: 4, md: 0 }
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
          md={6}
          sx={{
            pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(30) },
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
          <Typography variant="body2" sx={{ mb: { sx: 2, lg: 3 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
            Schluss mit dem Rätselraten bei der Preisgestaltung! Mit Kalkulatrix transformieren Sie Ihre Konstenstruktur in klare,
            gewinnorientierte Stundensätze.
          </Typography>
          <Typography variant="body2" sx={{ mb: { sx: 2, md: 5, lg: 6 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
            Mit der intuitiven Eingabe Ihrer Ausgaben und Gewinnziele, ermitteln wir den für Sie optimalen Stundensatzverkaufssatz. So
            steigern Sie Ihren Gewinn und Ihre Effizienz.
          </Typography>
          <Button variant="contained" color="primary">
            Jetzt starten
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          {/* <img src='https://placehold.co/1000x700/EEE/31343C' alt="Kalkulatrix Anwendung" /> */}
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          px: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(30) },
          mt: { xs: 8, md: 12, lg: 0 }
        }}
      >
        {itemsRendered}
      </Grid>
    </>
  );
};

export default SectionGewinn;
