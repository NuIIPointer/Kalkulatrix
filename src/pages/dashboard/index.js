import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import { Grid, Typography, Stack, Box } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard/index';
import useGetCalendarData from 'hooks/useGetCalendarData.js/index';
import dayjs from 'dayjs';

const Dashboard = () => {
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;
  const { futureCalendarData, calendarDataStatus } = useGetCalendarData();

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={3} mb={6}>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard primaryText="Angaben" prefixText="zu den" link="/office/form/overview" color={theme.palette.primary.dark} />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard primaryText="Profil" prefixText="zum" link="/" color={theme.palette.primary.light} />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard
            primaryText="Kontaktieren"
            prefixText="jetzt"
            link="/kontakt"
            target="_blank"
            color={theme.palette.primary[200]}
          />
        </Grid>
      </Grid>
    );
  }, [theme]);

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={'Dashboard'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis."
      />
      {bottomBoxRendering()}
      {calendarDataStatus === 'success' && futureCalendarData.length > 0 && (
        <>
          <Typography variant="h2" sx={{ mb: 1, mt: 8 }}>Anstehende Termine:</Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
          <Grid container spacing={3} sx={{ mt: -2 }}>
            {futureCalendarData.map((event) => {
              const startDateObj = dayjs(event.startDate);

              return (
                <Grid item md={6} lg={4} key={event.id}>
                  <Stack>
                    <Typography flexDirection="row" sx={{ fontSize: 36, display: 'flex', gap: 1 }}>
                      <Stack sx={{ fontWeight: 'bold' }}>{startDateObj.format('DD.MM.')}</Stack>
                      <Stack>{startDateObj.format('hh:mm')} Uhr</Stack>
                    </Typography>
                    <Typography variant="h3">{event.title}</Typography>
                    <Typography variant="body1">{event.description || 'tesr12409sia00 a0s9id 0ai09i 0qi10 ijsa '}</Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
};

export default Dashboard;
