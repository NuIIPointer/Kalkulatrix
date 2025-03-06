import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, Link, Button, Stack } from '@mui/material';
import LayoutBox from 'components/LayoutBox/index';

const EditProfile = () => {
  const theme = useTheme();

  return (
    <LayoutBox
      sx={{
        backgroundColor: theme.palette.common.white,
        padding: theme.shape.paddingBoxMedium,
        mb: 2
      }}
    >
      <Typography variant="h2" sx={{ mb: 1 }}>
        Rechnung einsehen
      </Typography>
      <Stack justifyContent="space-between" direction="row" flexWrap="wrap" gap={2}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Rechnungsdetails zu ihrem Abonnement können Sie hier einsehen
        </Typography>
        <Button variant="contained" color="primary" as={Link} to="https://billing.stripe.com/p/login/6oE9BK0zrg8jgXS144" target="_blank">
          Rechnungen abrufen
        </Button>
      </Stack>
    </LayoutBox>
  );
};

export default EditProfile;
