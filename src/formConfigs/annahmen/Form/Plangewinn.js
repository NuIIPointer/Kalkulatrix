import { FastField } from 'formik';
import { Grid, TextField } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';

const Plangewinn = () => {
  return (
    <FormSection
      collapsable={false}
      title="Plangewinn"
      description="Geben Sie hier an, wie hoch ihr geplanter Gewinn für das angegebene Planjahr ausfallen soll."
    >
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} sx={{ mt: { xs: 1 } }} alignItems="flex-end">
        <Grid item xs={12} sm={6}>
          <FastField name="gk_stundensaetze_H14">
            {({ field, meta }) => (
              <TextField
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
      </Grid>
    </FormSection>
  );
};

export default Plangewinn;
