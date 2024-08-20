import { useHasConsent } from 'services/cookieconsent';

const ConsentWrapper = ({ children, consentKeys }) => {
  const hasConsent = useHasConsent(consentKeys || []);
    console.log('consentwrapper', consentKeys, hasConsent);

  if (!hasConsent) {
    return 'Stimmen Sie dem Consent zu, um die Inhalte zu sehen';
  }

  return children;
};

export default ConsentWrapper;
