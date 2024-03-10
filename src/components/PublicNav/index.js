import { Box, Stack, Button, useTheme } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { Login } from '@mui/icons-material';

const PublicNav = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: `${theme.spacing(2)} ${theme.spacing(5)}`
      }}
    >
      <Stack justifyContent="space-between" direction="row">
        <Logo style={{ maxWidth: '200px' }} />
        <Button href="/login" color="primary" variant="contained" startIcon={<Login />}>
          Zum Login
        </Button>
      </Stack>
    </Box>
  );
};

export default PublicNav;
