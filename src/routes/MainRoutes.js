import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import PublicLayout from 'layout/PublicLayout';

// pages
const Start = Loadable(lazy(() => import('pages/start')));
const Impressum = Loadable(lazy(() => import('pages/impressum')));
const Datenschutz = Loadable(lazy(() => import('pages/datenschutz')));
const FAQ = Loadable(lazy(() => import('pages/faq')));
const Contact = Loadable(lazy(() => import('pages/kontakt')));
const EnterpriseContact = Loadable(lazy(() => import('pages/enterprise')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      path: '/',
      element: <Start />
    },
    {
      path: '/kontakt',
      element: <Contact />
    },
    {
      path: '/enterprise',
      element: <EnterpriseContact />
    },
    {
      path: '/impressum',
      element: <Impressum />
    },
    {
      path: '/datenschutz',
      element: <Datenschutz />
    },
    {
      path: '/faq',
      element: <FAQ />
    }
  ]
};

export default MainRoutes;
