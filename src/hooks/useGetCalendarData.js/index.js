import { useEffect, useMemo, useState } from 'react';
import icalFile from './calendar.ics';
import ICAL from 'ical.js';

const useGetCalendarData = () => {
  const environment = process.env.NODE_ENV || 'development';
  const calToUse = environment !== 'production' ? icalFile : '/eventcalendar/calendar.ics';

  const [calendarData, setCalendarData] = useState(null);
  const futureCalendarData = useMemo(() => {
    return calendarData ? calendarData.filter((event) => new Date(event.endDate) > new Date()) : [];
  }, [calendarData]);
  const [calendarDataStatus, setCalendarDataStatus] = useState(null);

  useEffect(() => {
    setCalendarDataStatus('processing');

    const fetchData = async () => {
      try {
        const response = await fetch(calToUse);
        const textData = await response.text();
        const jcalData = ICAL.parse(textData);
        const comp = new ICAL.Component(jcalData);
        const events = comp.getAllSubcomponents('vevent').map((event) => new ICAL.Event(event));

        const eventsFormatted = events
          .map((event) => {
            return {
              id: event.uid,
              title: event.summary,
              description: event.description,
              startDate: new Date(event.startDate),
              endDate: new Date(event.endDate)
            };
          })
          .sort((a, b) => (a.startDate < b.startDate ? -1 : 0));

        setCalendarDataStatus('success');
        setCalendarData(eventsFormatted);
      } catch (error) {
        setCalendarDataStatus('error');
        console.error('Error fetching or parsing iCalendar data:', error);
      }
    };

    fetchData();
  }, [calToUse]);

  return {
    url: calToUse,
    calendarData,
    futureCalendarData,
    calendarDataStatus
  };
};

export default useGetCalendarData;
