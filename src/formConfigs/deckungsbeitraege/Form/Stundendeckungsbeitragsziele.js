import { FastField } from 'formik';
import { Grid, Box, Typography } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import CustomTextField from 'components/CustomTextField/index';

const DGemeinkostenPlangewinn = () => {
  return (
    <>
      <FormSection title="Stundendeckungsbeitragsziele">
        <Box sx={{ mt: 1 }} />
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
          rowSpacing={{ xs: 1, lg: 1.5 }}
          sx={{ mt: { xs: 1 } }}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={6}>
            <FastField name="pk_produktiv_O36">
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Berechnungsbasis (Summe direkt verrechenbarer Std.)"
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
        <ReadOnlyBox alwaysOpen headlineVariant="none" sx={{ mb: { xs: 2, md: 3 } }}>
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mb: { xs: -2 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0 }}>
                Direkt verrechenbare Personalkosten
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="deckungsbeitraege_I12">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J12">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0, mt: 1 }}>
                Variable Betriebskosten
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="deckungsbeitraege_I13">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J13">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
        <ReadOnlyBox alwaysOpen headlineVariant="none" sx={{ mb: { xs: 2, md: 3 } }}>
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mb: { xs: -2 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0 }}>
                Grenzkosten
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="deckungsbeitraege_I14">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J14">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0, mt: 1 }}>
                Fixe Betriebskosten (ausgabenwirksam)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="deckungsbeitraege_I15">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J15">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0, mt: 1 }}>
                Beiträge zu den Betriebskosten
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="deckungsbeitraege_I16">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J16">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
        <ReadOnlyBox alwaysOpen headlineVariant="none" sx={{ mb: { xs: 2, md: 3 } }}>
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mb: { xs: -2 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0 }}>
                Selbstkosten (ausgabenwirksam)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FastField name="deckungsbeitraege_I17">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J17">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
              <FastField name="deckungsbeitraege_L17">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Deckungsbeitragsziel 1"
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
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0, mt: 1 }}>
                Fixe Betriebskosten (nicht ausgabenwirksam)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="deckungsbeitraege_I18">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesam"
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
              <FastField name="deckungsbeitraege_J18">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
        <ReadOnlyBox alwaysOpen headlineVariant="none" sx={{ mb: { xs: 2, md: 3 } }}>
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mb: { xs: -2 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0 }}>
                Selbstkosten
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FastField name="deckungsbeitraege_I19">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J19">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
              <FastField name="deckungsbeitraege_L19">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Deckungsbeitragsziel 2"
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
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0, mt: 1 }}>
                Plangewinn
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="deckungsbeitraege_I18">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J18">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
        <ReadOnlyBox alwaysOpen headlineVariant="none" sx={{ mb: 1 }}>
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mb: { xs: -2 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 0 }}>
                Selbstkosten + Plangewinn
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FastField name="deckungsbeitraege_I21">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Gesamt"
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
              <FastField name="deckungsbeitraege_J21">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="pro verrechn. Std."
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
              <FastField name="deckungsbeitraege_L21">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Deckungsbeitragsziel 3"
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
    </>
  );
};

export default DGemeinkostenPlangewinn;
