import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import deLocale from '@fullcalendar/core/locales/de';
import useGetCalendarData from 'hooks/useGetCalendarData.js';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FullCalendarConfigured = ({ sx = {}, calendarSx = {} }) => {
  const calendarData = useGetCalendarData();
  const theme = useTheme();

  const calendarStyles = {
    '.fc': {
      ...calendarSx,
    },
    '.fc-toolbar-chunk': {
      display: 'flex'
    },
    '.fc-header-toolbar': {
      gap: '0.5rem'
    },
    '.fc .fc-toolbar.fc-header-toolbar': {
      marginBottom: '0.5rem'
    },
    '.fc-toolbar-title': {
      fontSize: '1rem'
    },
    '.fc-button-group': {
      marginLeft: '0.5rem !important'
    },
    '.fc-button': {
      padding: '0.15rem 0.4rem'
    },
    '.fc-prev-button, .fc-next-button': {
      paddingInline: '0.2rem'
    },
    '.fc .fc-button .fc-icon': {
      fontSize: '1rem'
    },
    '.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    },
    '.fc-day-today': {
      backgroundColor: `${theme.palette.secondary[500]} !important`,
      color: theme.palette.common.white
    },
    '.fc .fc-daygrid-day-events': {
      marginTop: 0
    },
    '.fc-daygrid-event-harness': {
      backgroundColor: theme.palette.primary[500],
      height: '100%',
      a: {
        opacity: 0,
        height: '100%',
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    ...sx
  };

  return (
    <Box sx={calendarStyles}>
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
    </Box>
  );
};

export default FullCalendarConfigured;
