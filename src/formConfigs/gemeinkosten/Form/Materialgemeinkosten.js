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
      title="Materialaufwand / Wareneinkauf"
      description="In diesem Abschnitt werden Angaben zu Materialaufwand / Wareneinkauf eingetragen."
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
            Bezugskosten
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="gemeinkosten_material_F9">
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
          <FastField name="gemeinkosten_material_G9">
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
                <FastField name="gemeinkosten_material_H9">
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
                <FastField name="gemeinkosten_material_I9">
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
            Roh- und Hilfsstoffe
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="gemeinkosten_material_F10">
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
          <FastField name="gemeinkosten_material_G10">
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
                <FastField name="gemeinkosten_material_H10">
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
                <FastField name="gemeinkosten_material_I10">
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
            Verbrauchsmaterial
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="gemeinkosten_material_F11">
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
          <FastField name="gemeinkosten_material_G11">
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
                <FastField name="gemeinkosten_material_H11">
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
                <FastField name="gemeinkosten_material_I11">
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
          <ReadOnlyBox alwaysOpen title={'Materialgemeinkosten Gesamt'} headlineVariant="h3">
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} alignItems="flex-end">
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_F12">
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
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_H12">
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
                <FastField name="gemeinkosten_I12">
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
