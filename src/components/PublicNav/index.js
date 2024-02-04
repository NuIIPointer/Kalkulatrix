import { Box, Stack, Button, useTheme } from '@mui/material';
import Logo from 'components/Logo/Logo';

const PublicNav = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: `${theme.spacing(4)} ${theme.spacing(5)}`
      }}
    >
      <Stack justifyContent="space-between" direction="row">
        <Logo style={{ maxWidth: '200px' }} />
        <Button href="/login" color="primary" variant="contained">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default PublicNav;
