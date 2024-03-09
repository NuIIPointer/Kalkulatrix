import React, { useRef, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import Logo from 'components/Logo/Logo';

const SectionHeadlineText = ({ isActive }) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        alignItems: { md: 'center' },
        minHeight: { xs: '250px', sm: '45vh', md: '55vh' },
        justifyContent: 'center',
        paddingX: { xs: theme.spacing(2) }
      }}
    >
      <Logo style={{ maxWidth: '600px', width: '66vw', marginBottom: theme.spacing(1), marginX: { md: theme.spacing(2) } }} />
      <Box
        sx={{
          paddingX: 2,
          '& span': {
            backgroundColor: theme.palette.primary[500],
            color: theme.palette.common.white,
            paddingX: { xs: 1, sm: 2 },
            paddingY: { xs: 0.75, sm: 1 },
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[5],
            fontSize: { xs: 18, sm: 26, lg: 28, xl: 30 }
          }
        }}
      >
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
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </Box>
    </Stack>
  );
};

export default SectionHeadlineText;
