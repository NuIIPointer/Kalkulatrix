import { useHasConsent } from 'services/cookieconsent';
import { Alert, AlertTitle, Button, Stack } from '@mui/material/index';
import * as CookieConsent from 'vanilla-cookieconsent';

const ConsentWrapper = ({
  title,
  children,
  consentKeys,
  errorDescription = 'Sie müssen den Diensten zustimmen um dieses Element sehen zu können.',
  ...otherProps
}) => {
  const hasConsent = useHasConsent(consentKeys || []);
  const showConsent = () => CookieConsent.showPreferences();

  if (!hasConsent) {
    return (
      <Alert severity="warning" {...otherProps}>
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
