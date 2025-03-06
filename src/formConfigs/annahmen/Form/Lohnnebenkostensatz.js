import React from 'react';

// material-ui
import { Grid, TextField, Divider, Typography } from '@mui/material';

// formik
import { useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import EnrichedField from 'components/formComponents/EnrichedField/index';
import formFloat from 'utils/formUtils/formFloat';
import CustomTextField from 'components/CustomTextField/index';

const Lohnnebenkostensatz = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <>
      <FormSection
        title="Lohnnebenkosten"
        description="Lohnnebenkosten stellen jene Ausgaben dar, welche in ihrem Unternehmen neben dem Bruttolohn anfallen und somit die Gesamtkosten der Arbeitskraft erhöhen."
      >
        <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
          <Grid item xs={12}>
            <Divider sx={{ mt: 2, mb: 4 }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Produktive Kapazität (pro Jahr)</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <EnrichedField
              infoText={
                <>
                  <p>
                    Sonderzahlungen können bspw. ein 13. oder 14. Monatsgehalt sein. Auch Weihnachts- und Urlaubsgeld sowie
                    Gewinnbeteiligungen oder Jahresprämien gehören hierzu.
                  </p>
                </>
              }
            >
              <CustomTextField
                asFormikField
                id="annahmen_E39"
                name="annahmen_E39"
                label="Sonderzahlungen"
                endAdornment="Monate"
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
                max="5"
                value={values.annahmen_E39}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.annahmen_E39 && Boolean(errors.annahmen_E39)}
                helperText={touched.annahmen_E39 && errors.annahmen_E39}
              />
            </EnrichedField>
          </Grid>
          <Grid item xs={12} md={6}>
            <EnrichedField
              infoText={
                <>
                  <p>Beitragssätze für Deutschland (2024)</p>
                  <ul>
                    <li>Rentenversicherung (RV): 18,60%</li>
                    <li>Arbeitslosenversicherung (AV): 2,60%</li>
                    <li>Krankenversicherung (KV): 14,60%</li>
                    <li>Pflegeversicherung (PV): 3,60%</li>
                  </ul>
                  <p>= 39,40% Davon 50% für Arbeitgeber: 19,70%</p>
                </>
              }
            >
              <CustomTextField
                asFormikField
                id="annahmen_E41"
                name="annahmen_E41"
                label="SV-Abgaben Arbeitgeber"
                endAdornment="%"
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
                max="100"
                value={values.annahmen_E41}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.annahmen_E41 && Boolean(errors.annahmen_E41)}
                helperText={touched.annahmen_E41 && errors.annahmen_E41}
              />
            </EnrichedField>
          </Grid>
          <Grid item xs={12} md={6}>
            <EnrichedField
              infoText={
                <>
                  <p>
                    Sonstige Kosten sind eher: Betriebliche Altersvorsorge, Weiterbildungs- und Schulungskosten, Zusätzlich Versicherungen,
                    Gesundheitsförderung, Freiwillige Sozialleistungen, Prämien und Boni, Vermögenswirksame Leistungen
                  </p>
                </>
              }
            >
              <CustomTextField
                asFormikField
                id="annahmen_E42"
                name="annahmen_E42"
                label="Sonstige Kosten"
                endAdornment="%"
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
                max="100"
                value={values.annahmen_E42}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.annahmen_E42 && Boolean(errors.annahmen_E42)}
                helperText={touched.annahmen_E42 && errors.annahmen_E42}
                sx={{ mb: 2 }}
              />
            </EnrichedField>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              asFormikField
              InputProps={{
                readOnly: true
              }}
              type="number"
              id="annahmen_I46"
              name="annahmen_I46"
              label="Lohnnebenkostensatz"
              endAdornment="%"
              value={formFloat(values.annahmen_I46, 2)}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </FormSection>
      {/* <ReadOnlyBox white title={'Berechnet: Lohnnebenkostensatz'} alwaysOpen>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <CustomTextField asFormikField

              InputProps={{
                readOnly: true
              }}
              type="number"
              id="annahmen_I46"
              name="annahmen_I46"
              label="Lohnnebenkostensatz in %"
              value={formFloat(values.annahmen_I46, 2)}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </ReadOnlyBox> */}
    </>
  );
};

export default Lohnnebenkostensatz;
