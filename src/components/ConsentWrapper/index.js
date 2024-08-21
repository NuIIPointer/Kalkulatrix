import { useHasConsent } from 'services/cookieconsent';
import { Alert, AlertTitle } from '@mui/material/index';

const ConsentWrapper = ({
  title,
  children,
  consentKeys,
  errorDescription = 'Sie müssen den Diensten zustimmen um dieses Element sehen zu können.'
}) => {
  const hasConsent = useHasConsent(consentKeys || []);
  console.log('consentwrapper', consentKeys, hasConsent);

  if (!hasConsent) {
    return (
      <Alert severity="warning">
        {title ? <AlertTitle>{title}</AlertTitle> : ''} {errorDescription}
      </Alert>
    );
  }

  return children;
};

export default ConsentWrapper;
