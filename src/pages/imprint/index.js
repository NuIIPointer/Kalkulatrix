import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

const Imprint = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: { xs: theme.spacing(4), sm: theme.spacing(10), md: theme.spacing(16), lg: theme.spacing(20) }
      }}
    >
      <Typography variant="h1" sx={{ mb: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(10) } }}>
        Impressum
        <Typography component="span" variant="h2" sx={{ color: theme.palette.secondary[500], display: 'block' }}>
          Kalkulatrix
        </Typography>
      </Typography>
      <Typography sx={{ mb: { xs: theme.spacing(6), md: theme.spacing(12), lg: theme.spacing(18) } }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
        nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus
        faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.
      </Typography>
    </Box>
  );
};

export default Imprint;
