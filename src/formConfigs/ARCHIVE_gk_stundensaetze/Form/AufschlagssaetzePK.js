import { FastField } from 'formik';
import { Grid, Box } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import CustomTextField from 'components/CustomTextField/index';

const DGemeinkostenPlangewinn = () => {
  return (
    <FormSection title="2. Aufschlagssätze auf die Personalkosten pro Stunde">
      <ReadOnlyBox headlineVariant="h3" alwaysOpen title="a.) Direkt verrechenbare Personalkosten">
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
          rowSpacing={{ xs: 1, lg: 1.5 }}
          sx={{ mt: { xs: 1 } }}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={4}>
            <FastField name="gk_stundensaetze_F23">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Personalkosten (pro Stunde)"
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
          <Grid item xs={12} sm={4}>
            <FastField name="gk_stundensaetze_H23">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Direkt verrechnet"
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
            <FastField name="gk_stundensaetze_H29">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 1)}
                  label="Gemeinkosten: Aufschlagssatz auf Personalkosten"
                  endAdornment="%"
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
      <ReadOnlyBox headlineVariant="h3" alwaysOpen title="b.) Gemeinkostenstundensatz">
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
          rowSpacing={{ xs: 1, lg: 1.5 }}
          sx={{ mt: { xs: 1 } }}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={4}>
            <FastField name="gk_stundensaetze_F33">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Personalkosten (pro Stunde)"
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
            <FastField name="gk_stundensaetze_H29">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Aufschlagssatz"
                  endAdornment="%"
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
            <FastField name="gk_stundensaetze_H33">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gemeinkostenstundensatz"
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
            <FastField name="gk_stundensaetze_H38">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 1)}
                  label="Plangewinn: Aufschlagssatz auf Personalkosten"
                  endAdornment="%"
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
      <ReadOnlyBox headlineVariant="h3" alwaysOpen title="c.) Plangewinnsatz">
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
          rowSpacing={{ xs: 1, lg: 1.5 }}
          sx={{ mt: { xs: 1 } }}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={4}>
            <FastField name="std_verrechnungssaetze_G8">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Personalkosten (pro Stunde)"
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
            <FastField name="gk_stundensaetze_H38">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Aufschlagssatz"
                  endAdornment="%"
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
            <FastField name="gk_stundensaetze_H42">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Plangewinnsatz"
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
    </FormSection>
  );
};

export default DGemeinkostenPlangewinn;
