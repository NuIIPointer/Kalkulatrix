import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import ProtectedRoute from './helper/ProtectedRoute';
import Redirect from './helper/Redirect';

// pages
const FormOverview = Loadable(lazy(() => import('pages/form/FormOverview')));
const Form = Loadable(lazy(() => import('pages/form/Form')));
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const AdminDashboard = Loadable(lazy(() => import('pages/admin/dashboard')));
const Billing = Loadable(lazy(() => import('pages/billing')));
const Events = Loadable(lazy(() => import('pages/events')));
const Profile = Loadable(lazy(() => import('pages/profile')));

// ==============================|| MAIN ROUTING ||============================== //

const userRoutes = (isAdmin) => ({
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'office/dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      )
    },
    {
      path: 'office/profile',
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      )
    },
    isAdmin && {
      path: 'office/admin/dashboard',
      element: (
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      )
    } || {},
    {
      path: 'office/billing',
      element: (
        <ProtectedRoute>
          <Billing />
        </ProtectedRoute>
      )
    },
    {
      path: 'office/events',
      element: (
        <ProtectedRoute>
          <Events />
        </ProtectedRoute>
      )
    },
    {
      path: 'office/form/overview',
      element: (
        <ProtectedRoute>
          <FormOverview />
        </ProtectedRoute>
      )
    },
    {
      path: 'office/form',
      children: [
        {
          path: ':formId',
          children: [
            {
              path: ':formSection',
              element: (
                <ProtectedRoute>
                  <Form />
                </ProtectedRoute>
              )
            },
            {
              path: '',
              element: <Redirect to="/office/dashboard" />
            }
          ]
        },
        {
          path: '',
          element: <Redirect to="/office/dashboard" />
        }
      ]
    }
  ]
});

export default userRoutes;
