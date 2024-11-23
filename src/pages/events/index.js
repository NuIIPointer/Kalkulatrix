import React, { useContext } from 'react';
// import LayoutBox from 'components/LayoutBox/index';
// import { DialogContent, DialogContentText, Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import iCalendarPlugin from '@fullcalendar/icalendar';
// import deLocale from '@fullcalendar/core/locales/de';
// import useGetCalendarData from 'hooks/useGetCalendarData.js/index';
import { InlineWidget } from 'react-calendly';
import { UserContext } from 'context/user/index';
import ConsentWrapper from 'components/ConsentWrapper/index';

const Events = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <ConsentWrapper title="Kalender - Termin vereinbaren" consentKeys={['necessary']}>
        <InlineWidget
          url="https://calendly.com/adel-consulting/30min"
          styles={{
            height: '1200px'
          }}
          prefill={{
            email: user.email,
            name: user.displayName
          }}
        />
      </ConsentWrapper>
      {/* <LayoutBox
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
            url: calendarData.url,
            format: 'ics'
          }}
          eventClick={function (info) {
            setDialogSettings({
              title: info.event.title,
              description: info.event.extendedProps.description
            });
          }}
        />
      </LayoutBox> */}
      {/* <Dialog
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
      </Dialog> */}
    </>
  );
};

export default Events;
