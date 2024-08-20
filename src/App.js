// project import
import React, { useEffect } from 'react';
import Routes from 'routes';
import ThemeCustomization from 'themes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ScrollTop from 'components/ScrollTop';
import { SnackbarProvider } from 'notistack';

import 'dayjs/locale/de';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import runConsent from 'services/cookieconsent';

import './styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

dayjs.extend(dayOfYear);

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  useEffect(() => {
    runConsent();
  }, []);

  return (
    <ThemeCustomization>
      <LocalizationProvider adapterLocale="de" dateAdapter={AdapterDayjs}>
        <ScrollTop>
          <SnackbarProvider>
            <Routes />
          </SnackbarProvider>
        </ScrollTop>
      </LocalizationProvider>
    </ThemeCustomization>
  );
};

export default App;
