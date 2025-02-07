/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

// import { Typography, Box } from '@mui/material';
import { ReactComponent as KalkulatrixLogoLight } from '../../assets/images/logo/kalkulatrix_logo_white.svg';
import { ReactComponent as KalkulatrixLogoDark } from '../../assets/images/logo/kalkulatrix_logo_dark.svg';
import { ReactComponent as KalkulatrixLogoDarkOutlined } from '../../assets/images/logo/kalkulatrix_logo_dark_outline.svg';

const Logo = ({ variant, ...otherProps }) => {
  const logoLiteral = {
    dark: KalkulatrixLogoDark,
    darkOutlined: KalkulatrixLogoDarkOutlined,
    light: KalkulatrixLogoLight
  };

  const LogoComponent = logoLiteral[variant] || logoLiteral.dark;

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <LogoComponent alt="Kalkulatrix - Adel Consulting - Logo" style={{ width: '100%', height: 'auto' }} {...otherProps} />
    </>
    // <Box
    //   component="svg"
    //   viewBox="0 0 240 76"
    //   xmlns="http://www.w3.org/2000/svg"
    //   sx={{ width: '100%', color: color + ' !important', ...(otherProps.sx || {}) }}
    //   {...otherProps}
    // >
    //   <Typography
    //     x="-3"
    //     y="44"
    //     variant="h1"
    //     component="text"
    //     sx={{ fontWeight: 300, textAlign: { xs: 'center', sm: 'left' }, fontSize: '58px !important', fill: 'currentColor' }}
    //   >
    //     Kalkulatrix
    //   </Typography>
    //   <Typography x="0" y="70" component="text" sx={{ fontWeight: 700, fontSize: '18px !important', fill: 'currentColor' }}>
    //     Adel Consulting
    //   </Typography>
    // </Box>
  );
};

export default Logo;
