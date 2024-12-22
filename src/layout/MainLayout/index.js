import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// project import
import Drawer from './Drawer';
import Header from './Header';

// types
import { NavigationContext } from 'context/navigation/index';
import Profile from './Header/HeaderContent/Profile/index';
import Footer from 'layout/Footer/index';
import { PopupWidget } from 'react-calendly';
import { UserContext } from 'context/user/index';
import { CalendarMonth } from '@mui/icons-material';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const { user } = useContext(UserContext);
  const { setNavOpen, navOpen, useDrawerNav } = useContext(NavigationContext);

  return (
    <Box
      sx={{
        background: `radial-gradient(circle at 2% 10%, ${theme.palette.common.white}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary[900]}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.grey[300]}, transparent 100%)`,
        '.calendly-badge-widget .calendly-badge-content': {
          paddingLeft: theme.spacing(1.5),
          paddingRight: theme.spacing(1.5)
        },
        '& .calendly-badge-content': {
          backgroundColor: `${theme.palette.primary.main} !important`
        }
      }}
    >
      <PopupWidget
        url="https://calendly.com/adel-consulting/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById('root')}
        text={<CalendarMonth size={'32px'} sx={{ fontSize: '22px !important' }} />}
        textColor="#ffffff"
        color="#00a2ff"
        prefill={{
          name: user.displayName,
          email: user.email
        }}
      />
      <Box
        sx={{
          display: { xs: 'block', md: 'grid' },
          padding: { xs: theme.spacing(2), sm: theme.spacing(4), md: 0 },
          width: '100%',
          maxWidth: '1920px',
          minHeight: '100vh',
          margin: '0 auto',
          gridTemplateColumns: {
            xs: `0 auto 0 0`,
            md: `1fr ${theme.shape.layoutDesignGutter.md} minmax(50%, 1100px) 1fr`,
            lg: `1fr ${theme.shape.layoutDesignGutter.lg} minmax(50%, 1100px) 1fr`,
            xl: `1fr ${theme.shape.layoutDesignGutter.lg} minmax(50%, 1100px) 1fr`
          },
          gridTemplateRows: {
            xs: `auto ${theme.shape.layoutDesignGutter.xs} 1fr`,
            md: `auto ${theme.shape.layoutDesignGutter.md} 1fr`
          }
          // gap: theme.shape.layoutDesignGutter
        }}
      >
        <Box
          sx={{
            gridColumnStart: '2',
            gridColumnEnd: '4',
            gridRowStart: '1',
            gridRowEnd: '1'
          }}
        >
          <Box
            sx={{
              backgroundColor: { md: theme.palette.common.white },
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-betweend',
              paddingLeft: { md: theme.shape.layoutDesignGutter.md, lg: 0 },
              borderBottom: { md: `1px solid ${theme.palette.grey[300]}` },
              position: 'relative',
              ':after': {
                content: '""',
                position: 'absolute',
                top: '0',
                left: 'calc(100% - 1px)',
                backgroundColor: theme.palette.common.white,
                borderBottom: { md: `1px solid ${theme.palette.grey[300]}` },
                height: 'calc(100% + 1px)',
                width: '100vw'
              }
            }}
          >
            {useDrawerNav ? (
              <>
                <Box
                  sx={{
                    position: 'fixed',
                    top: '16px',
                    right: '16px',
                    backgroundColor: theme.palette.common.white,
                    boxShadow: theme.shadows[8],
                    padding: 1,
                    zIndex: '1000',
                    borderRadius: '500px',
                    display: 'flex',
                    gap: theme.spacing(1)
                  }}
                >
                  <Profile />
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{
                      height: '50px',
                      width: '50px',
                      minWidth: 'auto',
                      borderRadius: '500px',
                      border: `1px solid ${theme.palette.common.white}`,
                      padding: 1
                    }}
                    onClick={() => setNavOpen(!navOpen)}
                  >
                    <MenuIcon />
                  </Button>
                </Box>
                <Header />
              </>
            ) : (
              <Box
                sx={{
                  padding: theme.shape.paddingBoxMedium,
                  paddingLeft: theme.shape.layoutDesignGutter,
                  width: '100%'
                }}
              >
                <Header />
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gridColumnStart: '1',
            gridColumnEnd: '1',
            gridRowStart: '1',
            gridRowEnd: '5',
            backgroundColor: { lg: theme.palette.common.white },
            borderRight: { lg: `1px solid ${theme.palette.grey[300]}` },
            position: 'relative',
            ':after': {
              content: '""',
              position: 'absolute',
              top: '0',
              right: 'calc(100% - 1px)',
              backgroundColor: theme.palette.common.white,
              height: '100%',
              width: '100vw'
            },
            alignItems: 'flex-end',
            '@media(min-width: 1536px)': {
              alignItems: 'center'
            },
            '@media(min-width: 2000px)': {
              alignItems: 'flex-end'
            }
          }}
        >
          <Drawer />
        </Box>
        <Box
          component="main"
          sx={{
            width: '100%',
            flexGrow: 1,
            gridColumnStart: '3',
            gridColumnEnd: '4',
            gridRowStart: '3',
            gridRowEnd: '5',
            backgroundColor: 'transparent'
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
