import React from 'react';

// material-ui
import { Grid, Divider, MenuItem, Select, FormControl, InputLabel, FormHelperText } from '@mui/material';

// formik
import { FastField, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import CustomTextField from 'components/CustomTextField/index';

const Annahmen = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <FormSection title="Unternehmensdaten" defaultOpen={true} description="Pflegen Sie hier allgemeine Angaben zu Ihrem Unternehmen ein.">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            asFormikField
            id="annahmen_allgemein_planjahr"
            name="annahmen_allgemein_planjahr"
            label="Planjahr"
            fixedDecimals={false}
            value={values.annahmen_allgemein_planjahr}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            onWheel={(event) => event.target.blur()}
            min="1900"
            max="2100"
            error={touched.annahmen_allgemein_planjahr && Boolean(errors.annahmen_allgemein_planjahr)}
            helperText={touched.annahmen_allgemein_planjahr && errors.annahmen_allgemein_planjahr}
            sx={{ mb: 2 }}
            decimals={0}
            disableThousandSeperator
            onlyPremium
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            asFormikField
            id="annahmen_allgemein_unternehmensname"
            name="annahmen_allgemein_unternehmensname"
            label="Unternehmensname"
            value={values.annahmen_allgemein_unternehmensname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_unternehmensname && Boolean(errors.annahmen_allgemein_unternehmensname)}
            helperText={touched.annahmen_allgemein_unternehmensname && errors.annahmen_allgemein_unternehmensname}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            asFormikField
            id="annahmen_allgemein_planungsverantwortlicher"
            name="annahmen_allgemein_planungsverantwortlicher"
            label="Planungsverantwortlicher"
            value={values.annahmen_allgemein_planungsverantwortlicher}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_planungsverantwortlicher && Boolean(errors.annahmen_allgemein_planungsverantwortlicher)}
            helperText={touched.annahmen_allgemein_planungsverantwortlicher && errors.annahmen_allgemein_planungsverantwortlicher}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            asFormikField
            id="annahmen_allgemein_unternehmensstrasse"
            name="annahmen_allgemein_unternehmensstrasse"
            label="Straße, Hausnummer"
            value={values.annahmen_allgemein_unternehmensstrasse}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_unternehmensstrasse && Boolean(errors.annahmen_allgemein_unternehmensstrasse)}
            helperText={touched.annahmen_allgemein_unternehmensstrasse && errors.annahmen_allgemein_unternehmensstrasse}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            asFormikField
            id="annahmen_allgemein_unternehmensplz"
            name="annahmen_allgemein_unternehmensplz"
            label="PLZ und Ort"
            value={values.annahmen_allgemein_unternehmensplz}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_unternehmensplz && Boolean(errors.annahmen_allgemein_unternehmensplz)}
            helperText={touched.annahmen_allgemein_unternehmensplz && errors.annahmen_allgemein_unternehmensplz}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="annahmen_allgemein_unternehmensBundesland">
            {({ field, meta }) => (
              <FormControl fullWidth error={!!meta.error}>
                <InputLabel id="annahmen_allgemein_unternehmensBundesland-label">Bundesland</InputLabel>
                <Select displayEmpty defaultValue="" {...field} {...meta} labelId="annahmen_allgemein_unternehmensBundesland-label">
                  <MenuItem value="">Bitte wählen</MenuItem>
                  <MenuItem value={'BW'}>Baden-Württemberg</MenuItem>
                  <MenuItem value={'BY'}>Bayern</MenuItem>
                  <MenuItem value={'BE'}>Berlin</MenuItem>
                  <MenuItem value={'BB'}>Brandenburg</MenuItem>
                  <MenuItem value={'HB'}>Bremen</MenuItem>
                  <MenuItem value={'HH'}>Hamburg</MenuItem>
                  <MenuItem value={'HE'}>Hessen</MenuItem>
                  <MenuItem value={'MV'}>Mecklenburg-Vorpommern</MenuItem>
                  <MenuItem value={'NI'}>Niedersachsen</MenuItem>
                  <MenuItem value={'NW'}>Nordrhei-Westfalen</MenuItem>
                  <MenuItem value={'RP'}>Rheinland-Pfalz</MenuItem>
                  <MenuItem value={'SL'}>Saarland</MenuItem>
                  <MenuItem value={'SN'}>Sachsen</MenuItem>
                  <MenuItem value={'ST'}>Sachsen-Anhalt</MenuItem>
                  <MenuItem value={'SH'}>Schleswig-Holstein</MenuItem>
                  <MenuItem value={'TH'}>Thüringen</MenuItem>
                </Select>
                {meta.error ? <FormHelperText>{meta.error}</FormHelperText> : ''}
              </FormControl>
            )}
          </FastField>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Annahmen;
