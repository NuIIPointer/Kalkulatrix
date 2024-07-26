import React, { useCallback, useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Stack, Select, MenuItem } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard';
import useGetCalendarData from 'hooks/useGetCalendarData.js';
import dayjs from 'dayjs';
import DashboardCard from 'components/DashboardCard';
import { PeopleAlt, Receipt, LocalAtm, Inbox } from '@mui/icons-material';
import { UserContext } from 'context/user';
import FullCalendarConfigured from 'components/FullCalendarConfigured';
import TeaserCard from 'components/TeaserCard';

const Dashboard = () => {
  const theme = useTheme();
  const { futureCalendarData, calendarDataStatus } = useGetCalendarData();
  const { formsData } = useContext(UserContext);
  const [activeFormKey, setActiveFormKey] = useState(0);
  const formsKeys = Object.keys(formsData);
  const formIdToShow = formsKeys?.[activeFormKey];
  const formToShow = formIdToShow !== undefined && formsData?.[formIdToShow];
  const formValues = formToShow?.values || {};
  const formResult = formValues.deckungsbeitraege_L17;
  const produktivitaet =
    formValues.pk_produktiv_Q42 !== undefined && formValues.pk_produktiv_P42
      ? `${((formValues.pk_produktiv_P42 || 0) / (formToShow.values.pk_produktiv_Q42 || formValues.pk_produktiv_P42)) * 100}%`
      : 'Kein Ergebnis';
  const zuschlagProzentDurchschnitt = formValues.zuschlagProzentDurchschnitt
    ? parseFloat(formValues.zuschlagProzentDurchschnitt, 10).toFixed(2) * 100 + '%'
    : 'Kein Ergebnis';
  console.log('formValues', formValues);
  const anzMitarbeiter = (formValues.pk_produktiv_anzahl || 0) + (formValues.pk_allgemein_anzahl || 0);
  const formResultFormatted = formResult ? `${parseFloat(formResult, 10).toFixed(2)}€` : 'Kein Ergebnis';
  const formFrom = `Formular vom ${dayjs(formsData?.[activeFormKey]?.creationDate).format('DD.MM.YYYY')}`;

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={3} mb={6}>
        <Grid item xs={6} sm={6} xl={4}>
          <TextTeaserCard
            primaryText="Angaben"
            prefixText="zu den"
            link="/office/form/overview"
            color={theme.palette.primary.dark}
            boxShadow={theme.customShadows.z1}
          />
        </Grid>
        <Grid item xs={6} sm={6} xl={4}>
          <TextTeaserCard
            primaryText="Profil"
            prefixText="zum"
            link="/office/profile"
            color={theme.palette.primary.light}
            boxShadow={theme.customShadows.z1}
          />
        </Grid>
        <Grid item xs={6} sm={6} xl={4}>
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
      {formsKeys?.length > 0 && (
        <Stack flexDirection="row" justifyContent="flex-start">
          <Select
            sx={{
              width: 230,
              backgroundColor: theme.palette.common.white,
              borderRadius: theme.shape.borderRadius,
              '.MuiOutlinedInput-notchedOutline': {
                overlflow: 'hidden',
                borderColor: theme.palette.common.white
              },
              boxShadow: theme.customShadows.z1,
              mb: 3
            }}
            value={activeFormKey}
            labelId="annahmen_G17_days-label"
            onChange={(event) => setActiveFormKey(event.target.value || 0)}
          >
            {formsKeys.map((formKey, index) => {
              return (
                <MenuItem key={formKey} value={index}>
                  {`Formular vom ${dayjs(formsData?.[formKey]?.creationDate).format('DD.MM.YYYY')}`}
                </MenuItem>
              );
            })}
          </Select>
        </Stack>
      )}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ marginBottom: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        <Grid item sm={8}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={6} sm={6} md={6}>
              <DashboardCard
                sx={{ height: '100%' }}
                icon={Receipt}
                title="Aktueller Stundensatz"
                subTitle={formFrom}
                value={formResultFormatted}
                // valueChanged="12,25%"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <DashboardCard
                sx={{ height: '100%' }}
                icon={LocalAtm}
                title="Produktivität"
                subTitle={formFrom}
                value={produktivitaet}
                // valueChanged="10%"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <DashboardCard
                sx={{ height: '100%' }}
                icon={Inbox}
                title="Marge auf Produkt"
                subTitle={formFrom}
                value={zuschlagProzentDurchschnitt}
                // valueChanged="10%"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <DashboardCard
                sx={{ height: '100%' }}
                icon={PeopleAlt}
                title="Anzahl Mitarbeiter"
                subTitle={formFrom}
                value={anzMitarbeiter}
                // valueChanged="3"
                changedUpDown="down"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TeaserCard color={theme.palette.primary.dark} boxShadow={theme.customShadows.z1} sx={{ height: '100%' }}>
            <FullCalendarConfigured sx={{ height: '100%', width: '100%' }} calendarSx={{ height: '100%', width: '100%' }} />
          </TeaserCard>
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
