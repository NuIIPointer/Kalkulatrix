import { Box, Stack, Button, useTheme } from '@mui/material';
import Logo from 'components/Logo';
import { Login } from '@mui/icons-material';

const PublicNav = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: { xs: `${theme.spacing(2)} ${theme.spacing(2)}`, md: `${theme.spacing(3)} ${theme.spacing(6)}` }
      }}
    >
      <Stack justifyContent="space-between" direction="row">
        <Logo sx={{ maxWidth: '200px' }} variant="dark" />
        <Button href="/login" color="primary" variant="contained" startIcon={<Login />}>
          Zum Login
        </Button>
      </Stack>
    </Box>
  );
};

export default PublicNav;
