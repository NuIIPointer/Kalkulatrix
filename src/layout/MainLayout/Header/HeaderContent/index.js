// project import
import Profile from './Profile';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material/index';
import { NavigationContext } from 'context/navigation/index';
import { useLocation } from 'react-router-dom/dist/index';
import pages from '../../../../menu-items/index'; // Import pages data
import useFormLiteral from 'pages/form/useFormLiteral';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { useDrawerNav } = useContext(NavigationContext);
  const formLiteral = useFormLiteral();
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

    const currentPage = pagesFlattened.find(
      (page) => page.url === pathname || (page.matchingUrlRegexp && pathname.match(page.matchingUrlRegexp))
    );
    const isFormSubPage = currentPage.id === 'forms' && pathname.match(currentPage.matchingUrlRegexp);
    if (isFormSubPage) {
      const linkPart = pathname.split('/')[4];
      const theTitle = formLiteral[linkPart]?.title;

      if (theTitle) {
        return theTitle;
      }
    }
    return currentPage ? currentPage.title : '';
  };

  return (
    <>
      <Stack flexDirection="column">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 26, sm: 30, md: 32 },
            fontWeight: theme.typography.fontWeightBold,
            mb: { xs: theme.spacing(2), sm: theme.spacing(4), md: 0 },
            mt: { xs: theme.spacing(9), sm: 0 },
            paddingRight: { sm: theme.spacing(15), md: 0 }
          }}
        >
          {getTitle(location.pathname)}
        </Typography>
      </Stack>
      {!useDrawerNav && <Profile />}
    </>
  );
};

export default HeaderContent;
