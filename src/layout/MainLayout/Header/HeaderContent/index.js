// project import
import Profile from './Profile';
import { useContext } from 'react';
import { UserContext } from 'context/user';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material/index';
import { NavigationContext } from 'context/navigation/index';
import { useLocation } from 'react-router-dom/dist/index';
import pages from '../../../../menu-items/index'; // Import pages data

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { user } = useContext(UserContext);
  const { useDrawerNav } = useContext(NavigationContext);
  const theme = useTheme();
  const location = useLocation();

  const getTitle = (pathname) => {
    const pagesFlattened = [];

    pages.items?.forEach((page) => {
      if (page.children) {
        page.children.forEach((child) => {
          pagesFlattened.push(child);
        });
      } else {
        pagesFlattened.push(page);
      }
    });

    const currentPage = pagesFlattened.find((page) => page.url === pathname);
    return currentPage ? currentPage.title : '';
  };

  return (
    <>
      <Stack flexDirection="column" marginTop={1}>
        <Typography sx={{ fontSize: 36, fontWeight: theme.typography.fontWeightBold }}>{getTitle(location.pathname)}</Typography>
      </Stack>
      {!useDrawerNav && <Profile />}
    </>
  );
};

export default HeaderContent;
