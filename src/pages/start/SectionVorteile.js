import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import { AutoGraph, CalendarToday, Wallet } from '@mui/icons-material';
import IconChip from 'components/IconChip';
import SectionChip from 'components/SecitonChip';

const SectionHeadlineText = () => {
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
        mb: { xs: 6, sm: 8, md: 0 }
      }}
    >
      <IconChip
        icon={item.icon}
        colorPreset="primaryLight"
        sizePreset="large"
        cardSx={{ mb: { xs: 2, md: 3, lg: 5 } }}
        shadowPreset="small"
      />
      <Typography variant="h3" sx={{ mb: { xs: 1, md: 2 } }}>
        {item.title}
      </Typography>
      <Typography variant="body">{item.description}</Typography>
    </Grid>
  ));

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        textAlign: 'center',
        paddingInline: { xs: 4 }
      }}
    >
      <SectionChip colorPreset="primaryLight" sx={{ mx: { xs: 'none', md: 'auto' }, mb: 2, display: { xs: 'none', md: 'initial' } }}>
        How it works
      </SectionChip>
      <Typography variant="h2" sx={{ mb: { xs: 6, sm: 7, md: 8 }, fontSize: { xs: 28, md: 32, lg: 42 } }}>
        Entdecken Sie die Vorteile von Kalkulatrix
      </Typography>
      <Grid container justifyContent={'center'} columnGap={4}>
        {itemsRendered}
      </Grid>
    </Stack>
  );
};

export default SectionHeadlineText;
