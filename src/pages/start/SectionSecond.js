import React, { useRef, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';
import Logo from 'components/Logo/Logo';

const SectionFirst = ({ isActive }) => {
  const theme = useTheme();

  return (
    <Stack sx={{ alignItems: 'center', minHeight: '65vh', justifyContent: 'center' }}>
      <Logo style={{ maxWidth: '600px', marginBottom: theme.spacing(1), marginX: theme.spacing(2) }} />
      <Box
        sx={{
          '& span': {
            backgroundColor: theme.palette.primary[500],
            color: theme.palette.common.white,
            paddingX: 2,
            paddingY: 1,
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[5]
          }
        }}
      >
        <TypeAnimation
          sequence={[
            'Optimiere deine Stundensätze',
            1000,
            'Optimiere deine Personalkosten',
            1000,
            'Optimiere den Preis für deine Kunden',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '3em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </Box>
    </Stack>
  );
};

export default SectionFirst;
