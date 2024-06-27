import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import PublicNav from 'components/PublicNav/index';
import Footer from 'layout/Footer/index';
import { PopupWidget } from 'react-calendly';

// ==============================|| MAIN LAYOUT ||============================== //

const PublicLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          background: `radial-gradient(circle at 2% 10%, ${theme.palette.common.white}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary[800]}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.grey[200]}, transparent 100%)`
        }}
      >
        <PopupWidget
          url="https://calendly.com/adel-consulting/30min"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById('root')}
          text="Beratungstermin"
          textColor="#ffffff"
          color="#00a2ff"
        />
        <Box>
          <Box
            sx={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              backgroundColor: theme.palette.common.white,
              zIndex: 10000
            }}
          >
            <PublicNav />
          </Box>
          <Box
            component="main"
            sx={{
              pt: { xs: theme.spacing(10) }
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PublicLayout;
