import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid, TextField, Divider, MenuItem, Select, FormControl, InputLabel, Button, Stack } from '@mui/material';
import dayjs from 'dayjs';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import { UserContext } from 'context/user/index';
import FormReadonlyValue from 'components/formComponents/FormReadonlyValue/index';

const Annahmen = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();
  const { activeFormId, deleteForm } = useContext(UserContext);
  const navigate = useNavigate();

  const removeForm = async () => {
    await deleteForm(activeFormId);
    navigate('/office/form/overview');
  };

  return (
    <>
      <FormSection collapsable={false}>
        <Stack justifyContent="space-between" alignItems="center" direction="row" sx={{ width: '100%' }}>
          {/* <DateTimePicker readOnly label="Letzte Änderung" value={dayjs(values.letzteAenderung)} /> */}
          <FormReadonlyValue label="Letzte Änderung" value={dayjs(values.letzteAenderung).format('DD.MM.YYYY')} />
          <Button color="primary" variant="contained" onClick={removeForm}>
            Formular Löschen
          </Button>
        </Stack>
      </FormSection>
      <FormSection title="Allgemeine Annahmen" defaultOpen={true}>
        <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
          <Grid item xs={12}>
            <Divider sx={{ mt: 2, mb: 4 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="planjahr"
              name="planjahr"
              label="Planjahr"
              value={values.planjahr}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              min="1900"
              max="2100"
              error={touched.planjahr && Boolean(errors.planjahr)}
              helperText={touched.planjahr && errors.planjahr}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel for="waehrung">Währung</InputLabel>
              <Select
                id="waehrung"
                name="waehrung"
                value={values.waehrung}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.waehrung && Boolean(errors.waehrung)}
                helperText={touched.waehrung && errors.waehrung}
                sx={{ mb: 2 }}
                defaultValue="euro"
              >
                <MenuItem value="euro">€ Euro</MenuItem>
                <MenuItem value="dollar">$ Dollar</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="unternehmensname"
              name="unternehmensname"
              label="Unternehmensname"
              value={values.unternehmensname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.unternehmensname && Boolean(errors.unternehmensname)}
              helperText={touched.unternehmensname && errors.unternehmensname}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="unternehmensstrasse"
              name="unternehmensstrasse"
              label="Straße, Hausnummer"
              value={values.unternehmensstrasse}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.unternehmensstrasse && Boolean(errors.unternehmensstrasse)}
              helperText={touched.unternehmensstrasse && errors.unternehmensstrasse}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="unternehmensplz"
              name="unternehmensplz"
              label="PLZ und Ort"
              value={values.unternehmensplz}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.unternehmensplz && Boolean(errors.unternehmensplz)}
              helperText={touched.unternehmensplz && errors.unternehmensplz}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="planungsverantwortlicher"
              name="planungsverantwortlicher"
              label="Planungsverantwortlicher"
              value={values.planungsverantwortlicher}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.planungsverantwortlicher && Boolean(errors.planungsverantwortlicher)}
              helperText={touched.planungsverantwortlicher && errors.planungsverantwortlicher}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </FormSection>
    </>
  );
};

export default Annahmen;
