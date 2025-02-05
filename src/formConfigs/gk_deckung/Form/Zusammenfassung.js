import { FastField } from 'formik';
import { Grid } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import CustomTextField from 'components/CustomTextField/index';

const Zusammenfassung = () => {
  return (
    <FormSection collapsable={false} title="Zusammenfassung">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} sx={{ mt: { xs: 1 } }}>
        <Grid item xs={12} sm={6}>
          <FastField name="gk_deckung_H20">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                value={formFloat(field.value, 2)}
                label="Gesamtsumme der Beiträge zu den Betriebskosten"
                endAdornment="€"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                InputProps={{
                  readOnly: true
                }}
              />
            )}
          </FastField>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Zusammenfassung;
