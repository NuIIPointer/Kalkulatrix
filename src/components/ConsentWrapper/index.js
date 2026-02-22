import { useHasConsent } from 'services/cookieconsent';
import { Alert, AlertTitle, Button, Stack } from '@mui/material/index';
import { useTheme } from '@mui/material/styles';
import * as CookieConsent from 'vanilla-cookieconsent';

const ConsentWrapper = ({
  title,
  children,
  consentKeys,
  errorDescription = 'Sie müssen den Diensten zustimmen um dieses Element sehen zu können.',
  sx,
  ...otherProps
}) => {
  const hasConsent = useHasConsent(consentKeys || []);
  const showConsent = () => CookieConsent.showPreferences();
  const theme = useTheme();

  if (!hasConsent) {
    return (
      <Alert severity="warning" sx={{ boxShadow: theme.customShadows.buttonWarning, ...sx }} {...otherProps}>
        {title ? <AlertTitle>{title}</AlertTitle> : ''} {errorDescription}
        <Stack alignItems="flex-start" mt={1.5} mb={0.5}>
          <Button variant="contained" color="warning" onClick={showConsent} size="small">
            Cookie-Einstellungen öffnen
          </Button>
        </Stack>
      </Alert>
    );
  }

  return children;
};

export default ConsentWrapper;
