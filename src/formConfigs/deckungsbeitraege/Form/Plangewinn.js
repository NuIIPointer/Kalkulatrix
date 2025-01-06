import { FastField } from 'formik';
import { Grid, Stack, Typography } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import CustomTextField from 'components/CustomTextField/index';

const Plangewinn = () => {
  return (
    <FormSection
      collapsable={false}
      title={
        <Stack sx={{ width: '100%' }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Plangewinn
          </Typography>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid item xs={12} md={8} lg={7}>
              <Typography variant="body1">
                Geben Sie hier an, wie hoch ihr geplanter Gewinn für das angegebene Planjahr ausfallen soll.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              <FastField name="gk_stundensaetze_H14">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    endAdornment="€"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2, width: '100%' }}
                    type="number"
                    onWheel={(event) => event.target.blur()}
                    min="0"
                  />
                )}
              </FastField>
            </Grid>
          </Grid>
        </Stack>
      }
    ></FormSection>
  );
};

export default Plangewinn;
