import React from 'react';
import LayoutBox from 'components/LayoutBox/index';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const statCardStyles = (theme) => ({
  number: {
    color: theme.palette.primary[500],
    fontWeight: '700',
    fontSize: { xs: '1.25rem', sm: '1.5rem', xl: '2rem' },
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
  }
});

const StatCard = ({ title, value, sx = {} }) => {
  const theme = useTheme();

  return (
    <LayoutBox
      sx={{
        padding: theme.shape.paddingBoxSmall,
        boxShadow: '0',
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        ...sx
      }}
    >
      <Typography variant="body2" sx={statCardStyles(theme).number}>
        {value}
      </Typography>
      <Typography sx={statCardStyles(theme).description}>{title}</Typography>
    </LayoutBox>
  );
};

export default StatCard;
