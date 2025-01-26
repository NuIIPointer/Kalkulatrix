import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SectionChip from 'components/SecitonChip';

import phoneCollage from 'assets/images/content/phone_collage.png';

const SectionGewinn = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            as="img"
            src={phoneCollage}
            alt="Kalkulatrix Anwendung"
            sx={{
              width: '100%',
              maxWidth: { xs: '700px', lg: '100%' },
              paddingLeft: { md: 6 },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pr: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(24) },
            pl: { xs: theme.spacing(4), md: 0 },
            pt: { xs: theme.spacing(6), md: theme.spacing(15), lg: theme.spacing(20) },
            pb: { xs: theme.spacing(6), md: theme.spacing(12), lg: theme.spacing(15) }
          }}
        >
          <SectionChip colorPreset="primaryLight" sx={{ mx: 'auto', mb: 2, mr: 'auto', width: 'auto' }}>
            Umsetzung
          </SectionChip>
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, fontSize: { xs: 22, sm: 28, md: 36, lg: 48 } }}>
            Erst kalkulieren, dann implementieren
          </Typography>
          <Typography variant="body2" sx={{ mb: { sx: 2, lg: 3 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
            Kalkulatrix bietet Ihnen maßgeschneiderte Lösungen, die speziell auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.
          </Typography>
          <Typography variant="body2" sx={{ mb: { sx: 2, md: 5, lg: 6 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
            Unsere Berater nutzen tiefgreifendes Branchenwissen und praktische Erfahrung, um die Implementierung eines neuen Stundensatzes
            mit klaren Handlungsempfehlungen für Sie so einfach wie möglich zu gestalten.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionGewinn;
