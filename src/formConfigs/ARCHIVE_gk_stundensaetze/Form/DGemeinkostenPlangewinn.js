import { FastField } from 'formik';
import { Grid, Box } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import CustomTextField from 'components/CustomTextField/index';

const DGemeinkostenPlangewinn = () => {
  return (
    <FormSection defaultOpen title="1. Durchschnittliche Betriebskosten und Plangewinn pro Stunde">
      <Box sx={{ mt: 1 }} />
      <ReadOnlyBox alwaysOpen title="Gemeinkostensatz">
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
          rowSpacing={{ xs: 1, lg: 1.5 }}
          sx={{ mt: { xs: 1 } }}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H8">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme Betriebskosten (fix + var)"
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
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H9">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Beiträge zu Betriebskosten"
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
            <FastField name="gk_stundensaetze_H10">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Verbleibende Betriebskosten (nach Abzug von GK-Beiträgen)"
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
            <FastField name="gk_stundensaetze_H11">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Direkt verrechenbare Stunden"
                  endAdornment="in €"
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
            <FastField name="gk_stundensaetze_H12">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Ø Gemeinkostensatz pro Stunde"
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
      <Box sx={{ mt: 2 }} />
      <ReadOnlyBox alwaysOpen title="Plangewinnsatz">
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
          rowSpacing={{ xs: 1, lg: 1.5 }}
          sx={{ mt: { xs: 1 } }}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H14">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label="Plangewinn (in EUR)"
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
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H15">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label="Direkt verrechenbare Stunden"
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
            <FastField name="gk_stundensaetze_H16">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Ø Plangewinnsatz pro Stunde (in %)"
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
    </FormSection>
  );
};

export default DGemeinkostenPlangewinn;
