import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import { useEffect, useState } from 'react';

const runConsent = () => {
  /**
   * All config. options available here:
   * https://cookieconsent.orestbida.com/reference/configuration-reference.html
   */
  CookieConsent.run({
    categories: {
      necessary: {
        enabled: true, // diese Kategorie ist standardmäßig aktiviert
        readOnly: true // diese Kategorie kann nicht deaktiviert werden
      },
      analytics: {}
    },

    language: {
      default: 'de',
      translations: {
        de: {
          consentModal: {
            title: 'Wir verwenden Cookies',
            description:
              'Um unsere Webseite zu betreiben, verwenden wir Cookies. Einige von ihnen sind erforderlich, während andere uns helfen, diese Webseite und Ihre Erfahrung zu verbessern.',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Alle ablehnen',
            showPreferencesBtn: 'Individuelle Einstellungen verwalten'
          },
          preferencesModal: {
            title: 'Cookie-Einstellungen verwalten',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Alle ablehnen',
            savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
            closeIconLabel: 'Modal schließen',
            sections: [
              {
                title: 'Wir verwenden Cookies',
                description:
                  'Um unsere Webseite zu betreiben, verwenden wir Cookies. Einige von ihnen sind erforderlich, während andere uns helfen, diese Webseite und Ihre Erfahrung zu verbessern.'
              },
              {
                title: 'Unbedingt erforderliche Cookies',
                description: 'Diese Cookies sind für die ordnungsgemäße Funktion der Webseite unerlässlich.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Leistung und Analyse',
                description:
                  'Diese Cookies sammeln Informationen darüber, wie Sie unsere Webseite nutzen um unsere Dienste für Sie verbessern zu können.',
                linkedCategory: 'analytics'
              },
              {
                title: 'Weitere Informationen',
                description:
                  'Bei Fragen zu meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte an uns: <a href="/contact">Kontakt</a>'
              }
            ]
          }
        }
      }
    }
  });
};

export const useConsentSettings = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState({});

  useEffect(() => {
    const updateConset = (data = {}) => {
      console.log('updateConset', data);
      const { cookie } = data;
      if (cookie && (cookie.categories || cookie.services)) {
        setCategories(cookie.categories || []);
        setServices(cookie.services || {});
      }
    };
    window.addEventListener('cc:onConsent', ({ detail }) => {
      updateConset(detail);
    });
    window.addEventListener('cc:onChange', ({ detail }) => {
      updateConset(detail);
    });

    const initialData = CookieConsent.getCookie();
    setCategories(initialData.categories);
    setServices(initialData.services);

    return () => {
      window.removeEventListener('cc:onConsent', updateConset);
      window.removeEventListener('cc:onChange', updateConset);
    };
  }, []);

  console.log('changed consent', categories, services);

  return { categories, services };
};

export const useHasConsent = (consentIds) => {
  const { categories = [], services = {} } = useConsentSettings();
  const hasCategoryConsent = (categories || []).some((key) => consentIds?.includes(key));
  const hasServiceConsent = Object.keys(services).some((serviceKey) =>
    (services[serviceKey] || []).some((key) => consentIds?.includes(key))
  );

  return hasCategoryConsent || hasServiceConsent;
};

export default runConsent;
