import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import getInitials from 'utils/getInitials';

const InitialsCircle = ({ name, surname, sx = {}, fontSx = {} }) => {
  const initials = getInitials(name, surname);
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: '10000px',
        height: { xs: theme.spacing(4), sm: theme.spacing(4.5), md: theme.spacing(5) },
        width: { xs: theme.spacing(4), sm: theme.spacing(4.5), md: theme.spacing(5) },
        backgroundColor: theme.palette.secondary[300],
        position: 'relative',
        overflow: 'hidden',
        ...sx
      }}
    >
      <Typography
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: '800',
          fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
          ...fontSx,
          color: fontSx.color || theme.palette.secondary[600]
        }}
      >
        {initials}
      </Typography>
    </Box>
  );
};

export default InitialsCircle;
