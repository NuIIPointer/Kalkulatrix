// material-ui
import { Box } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import { useContext } from 'react';
import { UserContext } from 'context/user/index';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const { user } = useContext(UserContext);
  const navGroups = menuItem.items.map((item) => {
    return (!item.requiresAdmin || user?.isAdmin) && <NavGroup key={item.id} item={item} />;
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
