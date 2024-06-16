import React, { useRef, useEffect } from 'react';
import { Grid, Typography, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AutoGraph, CalendarToday, Wallet } from '@mui/icons-material';
import IconChip from 'components/IconChip/index';

const SectionHeadlineText = ({ isActive }) => {
  const theme = useTheme();

  const items = [
    {
      title: 'Gewinnsteigerung',
      description: 'Optimierung von Gewinnmargen durch Stundensatzkalkulation',
      icon: AutoGraph
    },
    {
      title: 'Präzise Preise',
      description: 'Faire Stundenverkaufssätzen auf Basis von realen Unternehmensdaten',
      icon: Wallet
    },
    {
      title: 'Optimale Planung',
      description: 'Planen von Mitarbeiterkosten und Verkaufsmargen Ihrer Produkte',
      icon: CalendarToday
    }
  ];

  const itemsRendered = items.map((item, i) => (
    <Grid
      item
      xs={12}
      md={2}
      key={i}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <IconChip icon={item.icon} colorPreset="primaryLight" sizePreset="large" shadowPreset="small" cardSx={{ mb: 5 }} />
      <Typography variant="h3" sx={{ mb: 2 }}>
        {item.title}
      </Typography>
      <Typography variant="body">{item.description}</Typography>
    </Grid>
  ));

  return (
    <Stack
      sx={{
        mb: { xs: 8, md: 16 },
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: 24, md: 32, lg: 36 } }}>
        Entdecken Sie die Vorteile von Kalkulatrix
      </Typography>
      <Grid container justifyContent="center" columnGap={4} sx={{ overflow: 'hidden' }}>
        {itemsRendered}
      </Grid>
    </Stack>
  );
};

export default SectionHeadlineText;
