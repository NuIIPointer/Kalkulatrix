import React, { useCallback, useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Stack, Select, MenuItem, Box } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard';
// import useGetCalendarData from 'hooks/useGetCalendarData.js';
import dayjs from 'dayjs';
import DashboardCard from 'components/DashboardCard';
import { PeopleAlt, Receipt, LocalAtm, Inbox } from '@mui/icons-material';
import { UserContext } from 'context/user';
// import FullCalendarConfigured from 'components/FullCalendarConfigured';
import TeaserCard from 'components/TeaserCard';
import formFloat from 'utils/formUtils/formFloat';
import { InlineWidget } from 'react-calendly';
import { PieChart } from '@mui/x-charts/PieChart';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const theme = useTheme();
  // const { futureCalendarData, calendarDataStatus } = useGetCalendarData();
  const { formsData } = useContext(UserContext);
  const [activeFormKey, setActiveFormKey] = useState(0);
  const formsKeys = Object.keys(formsData);
  const formIdToShow = formsKeys?.[activeFormKey];
  const formToShow = formIdToShow !== undefined && formsData?.[formIdToShow];
  const formValues = formToShow?.values || {};
  const formResult = formValues.deckungsbeitraege_L17;
  const auslastung = formValues.pk_produktiv_auslastung
    ? `${formFloat(formValues.pk_produktiv_auslastung, 2).toString().replace('.', ',')}%`
    : 'Kein Ergebnis';
  const zuschlagProzentDurchschnitt = formValues.zuschlagProzentDurchschnitt
    ? formFloat(formValues.zuschlagProzentDurchschnitt, 2) * 100 + '%'
    : 'Kein Ergebnis';
  console.log('formValues', formValues);
  const anzMitarbeiter = (formValues.pk_produktiv_anzahl || 0) + (formValues.pk_allgemein_anzahl || 0);
  const formResultFormatted = formResult ? `${formFloat(formResult, 2).toString().replace('.', ',')}€` : 'Kein Ergebnis';
  const formFrom = `Kalkulation vom ${dayjs(formsData?.[activeFormKey]?.creationDate).format('DD.MM.YYYY')}`;

  const lastCreatedForm = Object.values(formsData).reduce((prevForm, currentForm) => {
    if (!prevForm || currentForm.creationDate > prevForm.creationDate) {
      return currentForm;
    }
    return prevForm;
  }, null);
  const lastCreatedFormTimestamp = lastCreatedForm?.creationDate;
  const daysSinceLastCreated = lastCreatedFormTimestamp ? dayjs().diff(dayjs(lastCreatedFormTimestamp), 'days') : null;
  const lastCreatedPlusOffset = lastCreatedFormTimestamp ? dayjs(lastCreatedFormTimestamp).add(3, 'months') : null;
  const lastCreatedPlusOffsetInDays = lastCreatedPlusOffset
    ? dayjs(lastCreatedPlusOffset).diff(dayjs(lastCreatedFormTimestamp), 'days')
    : null;
  const nextCalculationInDays = lastCreatedPlusOffsetInDays - daysSinceLastCreated;

  const chartDummyData = [{ value: 100, color: theme.palette.primary[500] }];

  const chartData = [
    {
      value: daysSinceLastCreated,
      label: `Tage seit der letzten Kalkulation:`,
      color: lastCreatedFormTimestamp ? theme.palette.primary[500] : theme.palette.grey[500]
    },
    ...(nextCalculationInDays >= 1
      ? [
          {
            value: nextCalculationInDays,
            label: `Tage bis zur nächsten Kalkulation:`,
            color: theme.palette.grey[300]
          }
        ]
      : [])
  ];

  const series = [
    {
      cornerRadius: 32,
      paddingAngle: 2,
      innerRadius: 100,
      outerRadius: 120,
      cy: 120,
      cx: 120,
      hideTooltip: true,
      data: lastCreatedFormTimestamp ? chartData : chartDummyData
    }
  ];

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={3} mb={6}>
        <Grid item xs={6} sm={6} xl={4}>
          <TextTeaserCard primaryText="Angaben" prefixText="zu den" link="/office/form/overview" color={theme.palette.primary.dark} />
        </Grid>
        <Grid item xs={6} sm={6} xl={4}>
          <TextTeaserCard primaryText="Profil" prefixText="zum" link="/office/profile" color={theme.palette.primary.light} />
        </Grid>
        <Grid item xs={6} sm={6} xl={4}>
          <TextTeaserCard
            primaryText="Kontaktieren"
            prefixText="jetzt"
            link="/contact"
            target="_blank"
            color={theme.palette.primary[200]}
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
              width: 250,
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
                  {`Kalkulation vom ${dayjs(formsData?.[formKey]?.creationDate).format('DD.MM.YYYY')}`}
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
                title="Auslastung"
                subTitle={formFrom}
                value={auslastung}
                // valueChanged="10%"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <DashboardCard
                sx={{ height: '100%' }}
                icon={Inbox}
                title="Ø-Marge auf Produkte"
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
            {/* <FullCalendarConfigured sx={{ height: '100%', width: '100%' }} calendarSx={{ height: '100%', width: '100%' }} /> */}
            <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h3" sx={{ mt: 1, mx: 'auto', textAlign: 'center', display: 'block' }}>Nächste Kalkulation</Typography>
              {/* <Button sx={{ p: 1, borderRadius: 1000, minWidth: 0, minHeight: 0, aspectRatio: '1/1', d: 'flex', alignItems: 'center' }}>
                <MoreHoriz />
              </Button> */}
            </Stack>
            <Stack sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  my: { xs: -1, md: 0, lg: 1 },
                  position: 'relative',
                  height: 250,
                  aspectRatio: '1/1',
                  transform: { xs: 'scale(0.8)', xl: 'scale(1)' }
                }}
              >
                <Stack
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000,
                    textAlign: 'center'
                  }}
                >
                  {lastCreatedFormTimestamp ? (
                    <>
                      <Typography variant="h3" component="p">
                        {dayjs(lastCreatedPlusOffset).format('DD.MM.YYYY')}
                      </Typography>
                      <Typography variant="body">oder in {nextCalculationInDays} Tagen</Typography>
                    </>
                  ) : (
                    <Typography
                      variant="h4"
                      component={Link}
                      to="/office/form/overview"
                      sx={{ color: 'initial', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      Beginnen Sie jetzt ihre erste Kalkulation!
                    </Typography>
                  )}
                </Stack>
                <PieChart
                  series={series}
                  slotProps={{
                    legend: { hidden: true }
                  }}
                  sx={{ '.MuiPieArc-root': { stroke: 'transparent', strokeWidth: 0 } }}
                />
              </Box>
            </Stack>
            <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', opacity: 0.6, fontSize: 14, lineHeight: 1.3 }}>
              Wir empfehlen alle 3 Monate eine neue Kalkulation durchzuführen.
            </Typography>
          </TeaserCard>
        </Grid>
      </Grid>
      {bottomBoxRendering()}
      <InlineWidget
        url="https://calendly.com/adel-consulting/30min"
        styles={{
          height: '700px'
        }}
      />
      {/* {calendarDataStatus === 'success' && futureCalendarData?.length > 0 && (
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
      )} */}
    </>
  );
};

export default Dashboard;
