// material-ui
import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';
import * as CookieConsent from 'vanilla-cookieconsent';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const showConsent = () => CookieConsent.showPreferences();

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" component="span">
          &copy; Kalkulatrix&nbsp;
          <Typography component={Link} variant="subtitle2" href="/" underline="hover">
            Adel Consulting
          </Typography>
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography variant="subtitle2" component={Link} onClick={showConsent} underline="hover" sx={{ cursor: 'pointer' }}>
            Cookie-Einstellungen
          </Typography>
          <Typography variant="subtitle2" component={Link} href="/kontakt" underline="hover">
            Kontakt
          </Typography>
          <Typography variant="subtitle2" component={Link} href="/faq" underline="hover">
            FAQ
          </Typography>
          <Typography variant="subtitle2" component={Link} href="/impressum" underline="hover">
            Impressum
          </Typography>
          <Typography variant="subtitle2" component={Link} href="/datenschutz" underline="hover">
            Datenschutzerklärung
          </Typography>
          <Typography variant="subtitle2" component={Link} href="/files/kalkulatrix-allgemeine-geschaeftsbedingungen.pdf" underline="hover">
            AGB
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
