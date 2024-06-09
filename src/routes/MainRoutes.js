import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import PublicLayout from 'layout/PublicLayout';

// pages
const Start = Loadable(lazy(() => import('pages/start')));
const Imprint = Loadable(lazy(() => import('pages/imprint')));
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
      path: '/imprint',
      element: <Imprint />
    }
  ]
};

export default MainRoutes;
