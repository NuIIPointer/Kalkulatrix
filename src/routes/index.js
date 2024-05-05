import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import userRoutes from './UserRoutes';
import { useContext } from 'react';
import { UserContext } from 'context/user/index';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const { user } = useContext(UserContext);
  return useRoutes([MainRoutes, userRoutes(user?.isAdmin), LoginRoutes]);
}
