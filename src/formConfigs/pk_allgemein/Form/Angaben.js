import React from 'react';

// material-ui
import { Grid, Divider } from '@mui/material';

// formik
import { FastField } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import EnrichedField from 'components/formComponents/EnrichedField/index';
import CustomTextField from 'components/CustomTextField/index';

const Stammdaten = () => {
  return (
    <FormSection
      title="Allgemeine Angaben"
      description="In diesem Abschnitt werden allgemeine Angaben für die PK-allgemein eingetragen."
      defaultOpen={true}
    >
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end" columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K5">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                label="Lohnnebenkosten (bis Beitragsbemessungsgrenze"
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
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K6">
            {({ field, meta }) => (
              <EnrichedField
                infoText={
                  <>
                    <p>
                      Die <b>Beitragsbemessungsgrenze</b> ist der maximale Betrag des Einkommens, bis zu dem Beiträge zur Sozialversicherung
                      berechnet werden. Einkommen oberhalb dieser Grenze werden bei der Berechnung der Beiträge nicht berücksichtigt.
                    </p>
                  </>
                }
              >
                <CustomTextField
                  {...field}
                  label="Beitragsbemessungsgrenze (p.m.)"
                  endAdornment="€"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                  onWheel={(event) => event.target.blur()}
                  min="0"
                />
              </EnrichedField>
            )}
          </FastField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K7">
            {({ field, meta }) => (
              <EnrichedField
                infoText={
                  <p>
                    Die Höhe des Bruttoeinkommens, für das Sie als Arbeitgeber Lohnnebenkosten zahlen müssen, ist begrenzt. Überschreitet
                    das Bruttogehalt diese sogenannte Beitragsbemessungsgrenze, fallen für den Bruttolohn, der die Grenze übersteigt, keine
                    weiteren Sozialversicherungsbeiträge an.Kosten Oberhalb der BBG: Arbeitgeberbeiträge zur Unfallversicherung, Beiträge
                    zur Berufsgenossenschaft, Betriebliche Altersvorsorge, Zusätzliche freiwillige Sozialleistungen, Lohnfortzahlung im
                    Krankheitsfall, etc.
                  </p>
                }
              >
                <CustomTextField
                  {...field}
                  label="Lohnnebenkosten (oberhalb Beitragsbemessungsgrenze)"
                  endAdornment="%"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  type="number"
                  onWheel={(event) => event.target.blur()}
                  min="0"
                  max="100"
                />
              </EnrichedField>
            )}
          </FastField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K78">
            {({ field, meta }) => (
              <CustomTextField
                {...field}
                label="Anzahl der Gehälter (p.a., max. 12)"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
                max="12"
              />
            )}
          </FastField>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Stammdaten;
