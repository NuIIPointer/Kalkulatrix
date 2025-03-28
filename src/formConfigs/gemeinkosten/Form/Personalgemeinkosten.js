import React from 'react';

// material-ui
import { Grid, Divider, Typography } from '@mui/material';

// formik
import { FastField } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import formFloat from 'utils/formUtils/formFloat';
import CustomTextField from 'components/CustomTextField/index';

const Stammdaten = () => {
  return (
    <FormSection
      title="Personalgemeinkosten"
      description="In diesem Abschnitt werden Angaben zu Personalgemeinkosten eingetragen."
      onlyPremium
    >
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end" columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Nicht direkt verrechenbare Löhne (inkl. Lohn-NK)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="gemeinkosten_personal_F15">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                value={formFloat(field.value, 2)}
                label="Plankosten"
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
          <FastField name="gemeinkosten_personal_G15">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                label="Variable Kosten"
                endAdornment="%"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
              />
            )}
          </FastField>
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox>
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_personal_H15">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Variable Kosten"
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
                <FastField name="gemeinkosten_personal_I15">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Fixe Kosten"
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
          </ReadOnlyBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Gehälter (allg. Bereich) inkl. Lohn-NK
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="gemeinkosten_personal_F16">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                value={formFloat(field.value, 2)}
                label="Plankosten"
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
          <FastField name="gemeinkosten_personal_G16">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                label="Variable Kosten"
                endAdornment="%"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
              />
            )}
          </FastField>
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox>
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_personal_H16">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Variable Kosten"
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
                <FastField name="gemeinkosten_personal_I16">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Fixe Kosten"
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
          </ReadOnlyBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Sonst. Personalkosten
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="gemeinkosten_personal_F17">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                label="Plankosten"
                endAdornment="€"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
              />
            )}
          </FastField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="gemeinkosten_personal_G17">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                label="Variable Kosten"
                endAdornment="%"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
              />
            )}
          </FastField>
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox>
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_personal_H17">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Variable Kosten"
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
                <FastField name="gemeinkosten_personal_I17">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Fixe Kosten"
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
          </ReadOnlyBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox alwaysOpen title={'Personalgemeinkosten Gesamt'} headlineVariant="h3">
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} alignItems="flex-end">
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_F18">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Gesamt: Plankosten (berechnet)"
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
              <Grid item xs={8} sm={6}>
                <FastField name="gemeinkosten_H18">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Gesamt: variabele Kosten"
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
                <FastField name="gemeinkosten_I18">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Gesamt: fixe Kosten"
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
          </ReadOnlyBox>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Stammdaten;
