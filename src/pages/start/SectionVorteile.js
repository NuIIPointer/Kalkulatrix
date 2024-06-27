import React, { useRef, useEffect } from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AutoGraph, CalendarToday, Wallet } from '@mui/icons-material';
import IconChip from 'components/IconChip';
import SectionChip from 'components/SecitonChip';

const SectionHeadlineText = ({ isActive }) => {
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
      xs={10}
      sm={5}
      md={3}
      lg={2}
      key={i}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        mb: { xs: 4, sm: 8, md: 0 }
      }}
    >
      <IconChip icon={item.icon} colorPreset="primaryLight" sizePreset="large" cardSx={{ mb: 5 }} shadowPreset="small" />
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
      <SectionChip colorPreset="primaryLight" sx={{ mx: 'auto', mb: 2 }}>How it works</SectionChip>
      <Typography variant="h2" sx={{ mb: { xs: 6, sm: 7, md: 8 }, fontSize: { xs: 28, md: 32, lg: 42 } }}>
        Entdecken Sie die Vorteile von Kalkulatrix
      </Typography>
      <Grid container justifyContent="center" columnGap={4} sx={{ overflow: 'hidden' }}>
        {itemsRendered}
      </Grid>
    </Stack>
  );
};

export default SectionHeadlineText;
