import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, CircularProgress, Stack, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import LayoutBox from 'components/LayoutBox/index';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import deLocale from '@fullcalendar/core/locales/de';

const Events = () => {
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={`Beratungstermine`}
        description="Auf dieser Seite können Sie verfügbare Beratungstermine einsehen."
      />
      <LayoutBox
        sx={{
          backgroundColor: theme.palette.common.white,
          padding: theme.shape.paddingBoxMedium
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, iCalendarPlugin]}
          initialView="dayGridMonth"
          locales={[deLocale]}
          locale="de"
          events={{
            url: '/eventcalendar/calendar.ics',
            format: 'ics'
          }}
        />
      </LayoutBox>
    </>
  );
};

export default Events;
