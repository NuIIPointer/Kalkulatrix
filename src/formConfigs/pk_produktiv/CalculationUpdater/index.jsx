import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import getInitialMitarbeiterData from '../getInitialMitarbeiterData';

let timeout1 = null;
let timeout2 = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (!values.pk_produktiv_mitarbeiter || values.pk_produktiv_mitarbeiter?.length === 0) {
      setFieldValue('pk_produktiv_mitarbeiter.0', getInitialMitarbeiterData(values));
    }
  }, [setFieldValue, values]);

  useEffect(() => {
    clearTimeout(timeout1);

    const reCalculateMaValues = () => {
      let pk_produktiv_P40 = 0;
      let pk_produktiv_Q40 = 0;
      let pk_produktiv_S36 = 0;
      let pk_produktiv_O36 = 0;
      let pk_produktiv_Q36_tmp = 0;
      let mitarbeiter_anzahl = 0;

      values.pk_produktiv_mitarbeiter?.forEach((category, outerIndex) => {
        let S9_gesamt = 0;
        let N9_gesamt = 0;
        let Q9_gesamt = 0;

        category.fields?.forEach((ma, innerIndex) => {
          // Anwesenheitsentgeld (gesamt) START
          const J9 = 0 + (ma.F9 || 0) + (ma.G9 || 0) + (ma.H9 || 0) + (ma.I9 || 0);
          const M9 = (ma.E9 || 0) - J9;
          const O9 = (M9 * (ma.N9 || 100)) / 100;
          N9_gesamt += ma.N9;
          const P9 = M9 - O9;
          const S9 = M9 * ((ma.Q9 || 0) + (ma.R9 || 0));
          S9_gesamt += S9 || 0;
          Q9_gesamt += ma.Q9 || 0;
          const U9 = O9 * ((ma.Q9 || 0) + (ma.R9 || 0));
          const V9 = P9 * ((ma.Q9 || 0) + (ma.R9 || 0));
          const anzahl = 1;

          pk_produktiv_P40 += U9 * anzahl; // this
          pk_produktiv_Q40 += V9 * anzahl;
          pk_produktiv_S36 += S9 * anzahl;
          pk_produktiv_O36 += O9 * anzahl; // this
          pk_produktiv_Q36_tmp += (ma.Q9 || 0) * anzahl;
          mitarbeiter_anzahl++;

          if (J9 !== ma.J9) {
            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.J9`, J9);
          }
          if (M9 !== ma.M9) {
            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.M9`, M9);
          }
          if (O9 !== ma.O9) {
            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.O9`, O9);
          }
          if (P9 !== ma.P9) {
            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.P9`, P9);
          }
          if (S9 !== ma.S9) {
            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.S9`, S9);
          }
          if (U9 !== ma.U9) {
            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.U9`, U9);
          }
          if (V9 !== ma.V9) {
            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.V9`, V9);
          }
        });

        const N9_durchschnitt = N9_gesamt / category.fields.length;
        const Q9_durchschnitt = Q9_gesamt / category.fields.length;

        if (N9_durchschnitt !== category.N9_durchschnitt) {
          setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.N9_durchschnitt`, N9_durchschnitt);
        }

        if (Q9_durchschnitt !== category.Q9_durchschnitt) {
          setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.Q9_durchschnitt`, Q9_durchschnitt);
        }

        if (S9_gesamt !== category.S9_gesamt) {
          setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.S9_gesamt`, S9_gesamt);
        }
      });

      const pk_produktiv_Q36 = pk_produktiv_Q36_tmp / mitarbeiter_anzahl;
      const pk_produktiv_R40 = pk_produktiv_Q36;
      const pk_produktiv_S40 = pk_produktiv_S36;

      if (mitarbeiter_anzahl !== values.pk_produktiv_anzahl) {
        setFieldValue('pk_produktiv_anzahl', mitarbeiter_anzahl);
      }
      if (pk_produktiv_P40 !== values.pk_produktiv_P40) {
        setFieldValue('pk_produktiv_P40', pk_produktiv_P40);
      }
      if (pk_produktiv_Q40 !== values.pk_produktiv_Q40) {
        setFieldValue('pk_produktiv_Q40', pk_produktiv_Q40);
      }
      if (pk_produktiv_O36 !== values.pk_produktiv_O36) {
        setFieldValue('pk_produktiv_O36', pk_produktiv_O36);
      }
      if (pk_produktiv_Q36 !== values.pk_produktiv_Q36) {
        setFieldValue('pk_produktiv_Q36', pk_produktiv_Q36);
      }
      if (pk_produktiv_R40 !== values.pk_produktiv_R40) {
        setFieldValue('pk_produktiv_R40', pk_produktiv_R40);
      }
      if (pk_produktiv_S40 !== values.pk_produktiv_S40) {
        setFieldValue('pk_produktiv_S40', pk_produktiv_S40);
        setFieldValue('pk_produktiv_S36', pk_produktiv_S36);
      }
      // Anwesenheitsentgeld (gesamt) ENDE
    };

    timeout1 = setTimeout(() => {
      reCalculateMaValues();
    }, 500);

    return () => {
      clearTimeout(timeout1);
    };
  }, [
    setFieldValue,
    values.pk_produktiv_O36,
    values.pk_produktiv_P40,
    values.pk_produktiv_Q36,
    values.pk_produktiv_Q40,
    values.pk_produktiv_R40,
    values.pk_produktiv_S40,
    values.pk_produktiv_anzahl,
    values.pk_produktiv_mitarbeiter
  ]);

  useEffect(() => {
    clearTimeout(timeout2);

    const reCalculateLohnNKValues = () => {
      const P41 = ((values.annahmen_I46 || 0) / 100) * (values.pk_produktiv_P40 || 0);
      const Q41 = ((values.annahmen_I46 || 0) / 100) * (values.pk_produktiv_Q40 || 0);
      const R41 = ((values.annahmen_I46 || 0) / 100) * (values.pk_produktiv_R40 || 0);
      const S41 = (P41 || 0) + (Q41 || 0);
      const P42 = (P41 || 0) + (values.pk_produktiv_P40 || 0);
      const Q42 = (Q41 || 0) + (values.pk_produktiv_Q40 || 0);
      const R42 =
        (typeof values.pk_produktiv_O36 === 'number' && values.annahmen_I46
          ? (values.pk_produktiv_P40 || 0) / values.pk_produktiv_O36
          : 0) *
        ((values.annahmen_I46 || 0) / 100 + 1);
      const S42 = (S41 || 0) + (values.pk_produktiv_S40 || 0);

      if (!values.pk_produktiv_P41 !== P41) {
        setFieldValue('pk_produktiv_P41', P41);
      }
      if (values.pk_produktiv_Q41 !== Q41) {
        setFieldValue('pk_produktiv_Q41', Q41);
      }
      if (values.pk_produktiv_R41 !== R41) {
        setFieldValue('pk_produktiv_R41', R41);
      }
      if (values.pk_produktiv_S41 !== S41) {
        setFieldValue('pk_produktiv_S41', S41);
      }
      if (values.pk_produktiv_P42 !== P42) {
        setFieldValue('pk_produktiv_P42', P42);
      }
      if (values.pk_produktiv_Q42 !== Q42) {
        setFieldValue('pk_produktiv_Q42', Q42);
      }
      if (values.pk_produktiv_R42 !== R42) {
        setFieldValue('pk_produktiv_R42', R42);
      }
      if (values.pk_produktiv_S42 !== S42) {
        setFieldValue('pk_produktiv_S42', S42);
      }
    };

    timeout2 = setTimeout(() => {
      reCalculateLohnNKValues();
    }, 500);

    return () => {
      clearTimeout(timeout2);
    };
  }, [
    setFieldValue,
    values.annahmen_I46,
    values.pk_produktiv_Q40,
    values.pk_produktiv_P40,
    values.pk_produktiv_P42,
    values.pk_produktiv_R40,
    values.pk_produktiv_Q41,
    values.pk_produktiv_R41,
    values.pk_produktiv_P41,
    values.pk_produktiv_S41,
    values.pk_produktiv_Q42,
    values.pk_produktiv_R42,
    values.pk_produktiv_S40,
    values.pk_produktiv_S42,
    values.pk_produktiv_O36
  ]);

  useEffect(() => {
    const pk_produktiv_auslastung = values.pk_produktiv_Q42
      ? 100 - ((values.pk_produktiv_Q42 || 0) / (values.pk_produktiv_S42 || 0)) * 100
      : 100;
    if (pk_produktiv_auslastung !== values.pk_produktiv_auslastung) {
      setFieldValue('pk_produktiv_auslastung', pk_produktiv_auslastung);
    }
  }, [setFieldValue, values.pk_produktiv_S42, values.pk_produktiv_Q42, values.pk_produktiv_auslastung]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
