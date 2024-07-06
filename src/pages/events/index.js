import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
// import LayoutBox from 'components/LayoutBox/index';
// import { DialogContent, DialogContentText, Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import iCalendarPlugin from '@fullcalendar/icalendar';
// import deLocale from '@fullcalendar/core/locales/de';
// import useGetCalendarData from 'hooks/useGetCalendarData.js/index';
import { InlineWidget } from 'react-calendly';
import { UserContext } from 'context/user/index';

const Events = () => {
  const { user } = useContext(UserContext);
  // const [dialogSettings, setDialogSettings] = useState(null);
  const theme = useTheme();
  // const calendarData = useGetCalendarData();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={`Buchen Sie jetzt Ihren individuellen Beratungstermin.`}
        description="Unsere Experten stehen bereit, um Ihnen mit maßgeschneiderter Beratung zur Seite zu stehen. Ob Sie tiefer in die Funktionen von Kalkulatrix eintauchen oder spezifische Herausforderungen in Ihrem Unternehmen besprechen möchten, ein persönlicher Beratungstermin bietet Ihnen die Lösungen, welche zu Ihrem Unternehmen passen. Alternativ können Sie auch an unseren interaktiven Webinaren teilnehmen, die praktische Einblicke und nützliche Tipps zur Maximierung Ihrer Unternehmenspotenziale bieten."
      />
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
