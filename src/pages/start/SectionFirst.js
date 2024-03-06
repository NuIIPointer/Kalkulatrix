import React, { useRef, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import Logo from 'components/Logo/Logo';

const SectionFirst = ({ isActive }) => {
  const theme = useTheme();

  return (
    <Stack sx={{ alignItems: 'center', minHeight: { xs: '45vh', md: '55vh' }, justifyContent: 'center' }}>
      <Logo style={{ maxWidth: '600px', width: '66vw', marginBottom: theme.spacing(1), marginX: theme.spacing(2) }} />
      <Box
        sx={{
          '& span': {
            backgroundColor: theme.palette.primary[500],
            color: theme.palette.common.white,
            paddingX: 2,
            paddingY: 1,
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[5],
            fontSize: { xs: 24, sm: 26, lg: 28, xl: 30 }
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

export default SectionFirst;
