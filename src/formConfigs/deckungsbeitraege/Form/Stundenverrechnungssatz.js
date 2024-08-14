import { FastField, Field, useFormikContext } from 'formik';
import { Grid, TextField, Box, Typography } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';

const DGemeinkostenPlangewinn = () => {
  const { values } = useFormikContext();

  return (
    <>
      <FormSection collapsable={false} title="Stundenverrechnungssatz (ohne USt.):">
        <Typography variant="h2">
          {formFloat(values.std_verrechnungssaetze_G14 || 0, 2)
            .toString()
            .replace('.', ',')}
          €
        </Typography>
      </FormSection>
      <FormSection defaultOpen title="Kalkulation Stundenverrrechnungssatz">
        <Box sx={{ mt: 1 }} />
        <ReadOnlyBox title="Alle Angaben im Durchschnitt, in EUR">
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mt: { xs: 1 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G8">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Brutto-Stundenentgelt (inkl. Zulagen)"
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
              <Field name="std_verrechnungssaetze_G9">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label={`Personalnebenkosten (${formFloat(values.annahmen_I46, 1)}%)`}
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G10">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Personalkosten pro Stunde"
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
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G11">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="GK-Satz pro Stunde"
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
              <FastField name="std_verrechnungssaetze_G12">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Selbstkosten pro Stunde"
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
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G13">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Plangewinnsatz pro Stunde"
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
              <FastField name="std_verrechnungssaetze_G15">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    value={formFloat(field.value, 0)}
                    label="Durchschnittlicher Zuschlag Personalkosten (in %)"
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
    </>
  );
};

export default DGemeinkostenPlangewinn;
