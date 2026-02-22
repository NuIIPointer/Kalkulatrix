import { useState, useEffect } from 'react';
import { Box, Stack, Button, useTheme } from '@mui/material';
import Logo from 'components/Logo';
import { Login } from '@mui/icons-material';

const PublicNav = () => {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      sx={{
        padding: {
          xs: `${theme.spacing(scrolled ? 1 : 2)} ${theme.spacing(2)}`,
          md: `${theme.spacing(scrolled ? 1.5 : 3)} ${theme.spacing(6)}`
        },
        transition: 'padding 0.3s ease'
      }}
    >
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Logo sx={{ maxWidth: { xs: '140px', sm: '200px' } }} variant="dark" />
        <Stack direction="row" gap={{ xs: 1, sm: 2 }}>
          <Button
            href="/register"
            color="primary"
            variant="outlined"
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, px: { xs: 1.5, sm: 2 }, whiteSpace: 'nowrap' }}
          >
            Kostenlos testen
          </Button>
          <Button
            href="/login"
            color="primary"
            variant="contained"
            startIcon={<Login />}
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, px: { xs: 1.5, sm: 2 }, whiteSpace: 'nowrap' }}
          >
            Zum Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PublicNav;
