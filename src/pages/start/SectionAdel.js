import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconChip from 'components/IconChip';
import { AutoGraph, CalendarToday, Wallet } from '@mui/icons-material';
import SectionChip from 'components/SecitonChip';
import felixPortrait from 'assets/images/content/felix-adel-portrait.jpeg';

const SectionAdel = () => {
  const theme = useTheme();
  const items = [
    {
      title: 'Kostenoptimierung',
      description:
        'Steigende Löhne, Material- und Gemeinkosten drücken die Marge. Wir schaffen Transparenz über Ihre tatsächlichen Kosten und zeigen, wo unbemerkt Geld verloren geht.',
      icon: AutoGraph
    },
    {
      title: 'Regelmäßige Checks',
      description:
        'Ein einmal berechneter Stundensatz reicht nicht aus. Durch regelmäßige betriebswirtschaftliche Überprüfungen stellen wir sicher, dass Ihre Zahlen dauerhaft stimmen.',
      icon: Wallet
    },
    {
      title: 'Preise richtig kommunizieren',
      description:
        'Der beste Stundensatz bringt nichts, wenn er nicht durchsetzbar ist. Wir unterstützen Sie dabei, Preise nachvollziehbar zu begründen und souverän gegenüber Kunden zu vertreten.',
      icon: CalendarToday
    },
    {
      title: 'Langfristige Planung',
      description:
        'Unternehmerische Entscheidungen brauchen belastbare Grundlagen. Wir helfen Ihnen, Preise, Auslastung und Ertrag vorausschauend zu planen – statt nur auf Entwicklungen zu reagieren.',
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
      <IconChip icon={item.icon} colorPreset="primaryLight" sizePreset="medium" cardSx={{ flexShrink: 0 }} shadowPreset="button" />
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
    <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
      {/* Left column: Header + Items */}
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(24) },
          pr: { xs: theme.spacing(4), md: 0 },
          py: { xs: theme.spacing(6), md: theme.spacing(12), lg: theme.spacing(15) }
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
        {itemsRendered}
      </Grid>
      {/* Right column: Portrait */}
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          marginBlock: { xs: 4, sm: 6, md: 0 },
          pt: { md: theme.spacing(28), lg: theme.spacing(34), xl: theme.spacing(38) }
        }}
      >
        <Box
          sx={{
            width: { xs: 260, sm: 300, md: 300, lg: 380, xl: '540px' },
            height: { xs: 260, sm: 300, md: 300, lg: 380, xl: '540px' },
            borderRadius: '50%',
            p: 0.5,
            background: `linear-gradient(145deg, ${theme.palette.primary[100]} 0%, ${theme.palette.primary[300]} 50%, ${theme.palette.primary[100]} 100%)`,
            boxShadow: theme.customShadows.button
          }}
        >
          <Box
            component="img"
            src={felixPortrait}
            alt="Portrait des Geschäftsführers Felix Adel"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 20%'
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SectionAdel;
