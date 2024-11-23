import React from 'react';

// material-ui
import { Grid, TextField, Typography } from '@mui/material';

// formik
import { FastField, useFormikContext } from 'formik';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import formFloat from 'utils/formUtils/formFloat';
import EnrichedField from 'components/formComponents/EnrichedField/index';

const Zusammenfassung = () => {
  const { values } = useFormikContext();

  if (!values.pk_produktiv_P40) {
    return;
  }

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Zusammenfassung
      </Typography>
      <ReadOnlyBox alwaysOpen white>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-end">
          <Grid item xs={12} sm={4}>
            <FastField name="gemeinkosten_F49">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme aller Plan-Gemeinkosten (in EUR)"
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
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme aller variablen-Gemeinkosten (in EUR)"
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
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme aller fixen-Gemeinkosten (in EUR)"
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
                  <TextField
                    {...field}
                    label="Kfix nicht ausgabenwirksam (in EUR)"
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
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Kfix ausgabenwirksam (=Rest, in EUR)"
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
      </ReadOnlyBox>
    </>
  );
};

export default Zusammenfassung;
