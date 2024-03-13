import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { DialogContent, DialogContentText, Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import LayoutBox from 'components/LayoutBox/index';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import deLocale from '@fullcalendar/core/locales/de';
import ical from './calendar.ics';

const Events = () => {
  const [dialogSettings, setDialogSettings] = useState(null);
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  const environment = process.env.NODE_ENV || 'development';
  const calToUse = environment !== 'production' ? ical : '/eventcalendar/calendar.ics';

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
          key={'test'}
          plugins={[dayGridPlugin, iCalendarPlugin]}
          initialView="dayGridMonth"
          locales={[deLocale]}
          locale="de"
          events={{
            url: calToUse,
            format: 'ics'
          }}
          eventClick={function (info) {
            setDialogSettings({
              title: info.event.title,
              description: info.event.extendedProps.description
            });
          }}
        />
      </LayoutBox>
      <Dialog
        open={!!dialogSettings}
        onClose={() => setDialogSettings(null)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogSettings?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogSettings?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogSettings(null)}>Schließen</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Events;
