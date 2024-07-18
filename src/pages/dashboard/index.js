import React, { useCallback, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import { Grid, Typography, Stack } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard/index';
import useGetCalendarData from 'hooks/useGetCalendarData.js/index';
import dayjs from 'dayjs';
import DashboardCard from 'components/DashboardCard/index';
import { PeopleAlt, Receipt, LocalAtm, Inbox } from '@mui/icons-material';
import { UserContext } from 'context/user/index';

const Dashboard = () => {
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.white.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary[900]}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary[900]}, transparent 100%)`;
  const { futureCalendarData, calendarDataStatus } = useGetCalendarData();
  const { formsData } = useContext(UserContext);
  const formIdToShow = Object.keys(formsData)[0];
  const formToShow = formsData[formIdToShow];
  const formResult = formToShow?.values?.deckungsbeitraege_L17;
  const produktivitaet = formToShow?.values?.pk_produktiv_Q42
    ? formToShow.values.pk_produktiv_Q42 / (formToShow?.values?.pk_produktiv_P42 || 0)
    : 100;
  const formResultFormatted = formResult ? `${parseFloat(formResult, 10).toFixed(2)}€` : 'Kein Ergebnis';

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={3} mb={6}>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard
            primaryText="Angaben"
            prefixText="zu den"
            link="/office/form/overview"
            color={theme.palette.primary.dark}
            boxShadow={theme.customShadows.z1}
          />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard
            primaryText="Profil"
            prefixText="zum"
            link="/office/profile"
            color={theme.palette.primary.light}
            boxShadow={theme.customShadows.z1}
          />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard
            primaryText="Kontaktieren"
            prefixText="jetzt"
            link="/contact"
            target="_blank"
            color={theme.palette.primary[200]}
            boxShadow={theme.customShadows.z1}
          />
        </Grid>
      </Grid>
    );
  }, [theme]);

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ marginBottom: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        <Grid item xs={12} sm={6} md={6}>
          <DashboardCard
            icon={Receipt}
            title="Aktueller Stundensatz"
            // subTitle="Seit letzter Kalkulation"
            value={formResultFormatted}
            // valueChanged="12,25%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <DashboardCard
            icon={LocalAtm}
            title="Produktivität"
            // subTitle="Seit letzter Kalkulation"
            value={`${produktivitaet}%`}
            // valueChanged="10%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <DashboardCard
            icon={Inbox}
            title="Marge auf Produkt"
            // subTitle="Seit letzter Kalkulation"
            value="89,00%"
            // valueChanged="10%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <DashboardCard
            icon={PeopleAlt}
            title="Anzahl Mitarbeiter"
            // subTitle="Seit letzter Kalkulation"
            value="25"
            // valueChanged="3"
            changedUpDown="down"
          />
        </Grid>
      </Grid>
      {bottomBoxRendering()}
      {calendarDataStatus === 'success' && futureCalendarData?.length > 0 && (
        <>
          <Typography variant="h2" sx={{ mb: 1, mt: 8 }}>
            Anstehende Termine
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </Typography>
          <Grid container spacing={3} sx={{ mt: -2 }}>
            {futureCalendarData.slice(0, 3).map((event) => {
              const startDateObj = dayjs(event.startDate);

              return (
                <Grid item md={6} lg={4} key={event.id}>
                  <Stack>
                    <Typography flexDirection="row" sx={{ fontSize: 36, display: 'flex', gap: 1.5 }}>
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
