// project import
import Profile from './Profile';
import { useContext } from 'react';
import { UserContext } from 'context/user';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material/index';
import { NavigationContext } from 'context/navigation/index';
import { useLocation } from 'react-router-dom/dist/index';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { user } = useContext(UserContext);
  const { useDrawerNav } = useContext(NavigationContext);
  const theme = useTheme();
  const location = useLocation();

  return (
    <>
      <Stack
        flexDirection="column"
        marginTop={1}
        {...(location.pathname !== '/office/dashboard' ? { sx: { opacity: 0 }, 'aria-hidden': true } : {})}
      >
        <Typography sx={{ fontSize: 36, fontWeight: theme.typography.fontWeightBold }}>Kalkulatrix Dashboard</Typography>
      </Stack>
      {!useDrawerNav && <Profile />}
    </>
  );
};

export default HeaderContent;
