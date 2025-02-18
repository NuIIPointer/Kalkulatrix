import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconChip from 'components/IconChip';
import { AutoGraph, CalendarToday, Wallet } from '@mui/icons-material';
import SectionChip from 'components/SecitonChip';
import felixPortrait from 'assets/images/content/felix_ade_portrait.png';

const SectionAdel = () => {
  const theme = useTheme();
  const items = [
    {
      title: 'Aufbau Arbeitgebermarke',
      description:
        'Niemand bewirbt sich auf ihre Stellenanzeige? Wir helfen Ihnen sich als bevorzugter Arbeitgeber in der Region zu positionieren und qualifizierte Fachkräfte zu finden.',
      icon: AutoGraph
    },
    {
      title: 'Social Media Marketing & Recruiting',
      description: 'Wir erhöhen Ihre digitale Sichtbarkeit und entwickeln gezielte Kampagnen zur Gewinnung neuer Mitarbeiter oder Kunden',
      icon: Wallet
    },
    {
      title: 'Prozess & Produktivitätsoptimierung',
      description:
        'Kostensenken,Durchlaufzeitenverkürzen&Produktivität erhöhen.WirdurchleuchtenihreProzesseundunterstützen mit klaren Handlungsempfehlungen.',
      icon: CalendarToday
    },
    {
      title: 'Digitalisierung',
      description: 'Professionelle Beratung bei Implementierung von neuen Technologien und KI-Anwendungen.',
      icon: CalendarToday
    }
  ];
  const itemsRendered = items.map((item, i) => (
    <Stack
      key={i}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
        gap: { xs: 2, md: 3, lg: 4 },
        mb: { xs: 2, sm: 4, md: 6 }
      }}
    >
      <IconChip icon={item.icon} colorPreset="primaryLight" sizePreset="medium" cardSx={{ flexShrink: 0 }} shadowPreset="small" />
      <Stack mt={1.5}>
        <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0, fontWeight: 600 }}>
          {item.description}
        </Typography>
      </Stack>
    </Stack>
  ));

  return (
    <>
      <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(24) },
            pr: { xs: theme.spacing(4), md: 0 },
            pt: { xs: theme.spacing(6), md: theme.spacing(12), lg: theme.spacing(15) }
          }}
        >
          <SectionChip colorPreset="primaryLight" sx={{ mx: 'auto', mb: 2, mr: 'auto', width: 'auto' }}>
            Professionelle Beratung
          </SectionChip>
          <Typography variant="h2" sx={{ mb: { xs: 4, md: 7, lg: 10 }, fontWeight: 700, fontSize: { xs: 22, sm: 28, md: 36, lg: 48 } }}>
            <Typography variant="span" display="block">
              KALKULATRIX
            </Typography>
            <Typography variant="span" fontSize="0.8em" lineHeight="0.8em" fontWeight="400">
              Ein Produkt der Adel Consulting
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(24) },
            pr: { xs: theme.spacing(4), md: 0 },
            pb: { xs: theme.spacing(6), md: theme.spacing(12), lg: theme.spacing(15) }
          }}
        >
          {itemsRendered}
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBlock: { xs: 4, sm: 6, md: 8, lg: 0 } }}
        >
          <Box
            as="img"
            src={felixPortrait}
            alt="Portrait des Geschäftsführers Felix Adel"
            sx={{
              width: '100%',
              maxWidth: { xs: '700px', lg: '100%' },
              borderRadius: { xs: 0, sm: 3, lg: 4 },
              overflow: 'hidden',
              boxShadow: theme.customShadows.z1,
              marginRight: { xs: 0, sm: 4, md: 6, lg: 10 }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SectionAdel;
