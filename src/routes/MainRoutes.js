import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import PublicLayout from 'layout/PublicLayout';

// pages
const Start = Loadable(lazy(() => import('pages/start')));
const Impressum = Loadable(lazy(() => import('pages/impressum')));
const Datenschutz = Loadable(lazy(() => import('pages/datenschutz')));
const Contact = Loadable(lazy(() => import('pages/contact')));

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
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/impressum',
      element: <Impressum />
    },
    {
      path: '/datenschutz',
      element: <Datenschutz />
    }
  ]
};

export default MainRoutes;
