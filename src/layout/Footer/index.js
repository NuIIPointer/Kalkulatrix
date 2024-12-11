import { Box, Grid, List, ListItemButton, ListItem } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import * as CookieConsent from 'vanilla-cookieconsent';

const Footer = () => {
  const theme = useTheme();

  const footerLinkStyles = {
    fontWeight: 300,
    fontSize: '1rem',
    padding: 0,
    boxShadow: 'none',
    whiteSpace: 'nowrap',
    '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
  };

  const showConsent = () => CookieConsent.showPreferences();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'transparent',
        padding: theme.shape.paddingBoxLarge,
        position: 'relative',
        zIndex: '1',
        borderTop: `1px solid ${theme.palette.grey[400]}`
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Logo style={{ maxWidth: '350px' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <List
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' },
              gap: `${theme.spacing(1)} ${theme.spacing(3)}`,
              height: '100%',
              alignItems: 'center'
            }}
          >
            <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
              <ListItemButton variant="subtitle2" onClick={showConsent} sx={footerLinkStyles}>
                Cookie-Einstellungen
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
              <ListItemButton variant="subtitle2" component={RouterLink} to="/kontakt" sx={footerLinkStyles}>
                Kontakt
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
              <ListItemButton variant="subtitle2" component={RouterLink} to="/impressum" sx={footerLinkStyles}>
                Impressum
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
              <ListItemButton variant="subtitle2" component={RouterLink} to="/datenschutz" sx={footerLinkStyles}>
                Datenschutz
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
