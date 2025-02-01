import React from 'react';

// material-ui
import { Grid, Typography, useTheme } from '@mui/material';

// formik
import { FastField, useFormikContext } from 'formik';
import EnrichedField from 'components/formComponents/EnrichedField/index';
import CustomTextField from 'components/CustomTextField/index';
import LayoutBox from 'components/LayoutBox/index';
import StatCard from 'components/StatCard/index';
import formattedNumber from 'utils/formUtils/formattedNumber';

const Zusammenfassung = () => {
  const { values } = useFormikContext();
  const theme = useTheme();

  if (!values.pk_produktiv_P40) {
    return;
  }

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Zusammenfassung
      </Typography>
      <LayoutBox sx={{ backgroundColor: theme.palette.common.white, padding: theme.shape.paddingBoxMedium }}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2 }}
          rowSpacing={{ xs: 1, sm: 2 }}
          alignItems="end"
          sx={{ mb: 0, alignItems: 'stretch' }}
        >
          <Grid item xs={6} sm={6} md={4}>
            <StatCard
              title="Gesamtsumme aller Plan-Betriebskosten"
              value={`${formattedNumber(values.pk_produktiv_P42, { decimals: 2 }) || 0}€`}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <StatCard
              title="Gesamtsumme aller variablen-Betriebskosten"
              value={`${formattedNumber(values.gemeinkosten_H49, { decimals: 2 }) || 0}€`}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <StatCard
              title="Gesamtsumme aller fixen-Betriebskosten"
              value={`${formattedNumber(values.gemeinkosten_I49, { decimals: 2 }) || 0}€`}
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gemeinkosten_I51">
              {({ field, meta }) => (
                <EnrichedField
                  infoText={
                    <p>
                      Nicht ausgabenwirksame Fixkosten sind Fixkosten, die zwar als Aufwand in der Gewinn- und Verlustrechnung eines
                      Unternehmens erfasst werden, aber keine tatsächlichen Auszahlungen (Cashflows) verursachen, z.B. Abschreibungen,
                      Wertberichtigungen und Rückstellungen, Abgrenzungsposten, Kalkulatorische Kosten.
                    </p>
                  }
                >
                  <CustomTextField
                    {...field}
                    label="Kfix nicht ausgabenwirksam"
                    endAdornment="€"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    type="number"
                    onWheel={(event) => event.target.blur()}
                    min="0"
                  />
                </EnrichedField>
              )}
            </FastField>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6} sm={6} md={6}>
            <StatCard title="Kfix ausgabenwirksam (=Rest)" value={`${formattedNumber(values.gemeinkosten_I53, { decimals: 2 }) || 0}€`} />
          </Grid>
        </Grid>
      </LayoutBox>
      {/* <ReadOnlyBox alwaysOpen white>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-end">
          <Grid item xs={12} sm={4}>
            <FastField name="gemeinkosten_F49">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme aller Plan-Betriebskosten"
                  endAdornment="€"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                  type="number"
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FastField name="gemeinkosten_H49">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme aller variablen-Betriebskosten"
                  endAdornment="€"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                  type="number"
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FastField name="gemeinkosten_I49">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme aller fixen-Betriebskosten"
                  endAdornment="€"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                  type="number"
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gemeinkosten_I51">
              {({ field, meta }) => (
                <EnrichedField
                  infoText={
                    <p>
                      Nicht ausgabenwirksame Fixkosten sind Fixkosten, die zwar als Aufwand in der Gewinn- und Verlustrechnung eines
                      Unternehmens erfasst werden, aber keine tatsächlichen Auszahlungen (Cashflows) verursachen, z.B. Abschreibungen,
                      Wertberichtigungen und Rückstellungen, Abgrenzungsposten, Kalkulatorische Kosten.
                    </p>
                  }
                >
                  <CustomTextField
                    {...field}
                    label="Kfix nicht ausgabenwirksam"
                    endAdornment="€"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    type="number"
                    onWheel={(event) => event.target.blur()}
                    min="0"
                  />
                </EnrichedField>
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gemeinkosten_I53">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Kfix ausgabenwirksam (=Rest)"
                  endAdornment="€"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                  type="number"
                />
              )}
            </FastField>
          </Grid>
        </Grid>
      </ReadOnlyBox> */}
    </>
  );
};

export default Zusammenfassung;
