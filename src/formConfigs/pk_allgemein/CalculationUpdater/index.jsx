import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    const pk_allgemein_K5 = (values.annahmen_E41 || 0) + (values.annahmen_E42 || 0);
    if (pk_allgemein_K5 !== values.pk_allgemein_K5) {
      setFieldValue('pk_allgemein_K5', pk_allgemein_K5);
    }
  }, [values.pk_allgemein_K5, values.annahmen_E41, values.annahmen_E42, setFieldValue]);

  useEffect(() => {
    clearTimeout(timeout);
    const reCalculateMaValues = () => {
      let N53 = 0;
      let pk_allgemein_anzahl = 0;

      values.pk_allgemein_mitarbeiter?.forEach((category, outerIndex) => {
        let N24 = 0;
        let K14Gesamt = 0;

        category.fields?.forEach((ma, innerIndex) => {
          const H14 = (ma.G14 || 0) - (ma.F14 || 0) + 1;
          const J14 = (H14 || 0) * (ma.I14 || 0);
          const L14 = (J14 || 0) + (parseInt(ma.K14) || 0);
          const I14 = ma.I14 || 0;

          K14Gesamt += parseInt(ma.K14) || 0;

          const BGG = values.pk_allgemein_K6 || 0;
          let result = 0;
          if (I14 <= BGG) {
            result = (L14 * (values.pk_allgemein_K5 || 0)) / 100;
          } else {
            if (H14 === 0) {
              result = 0;
            } else {
              result =
                (BGG * H14 * (values.pk_allgemein_K78 / 12) * (values.pk_allgemein_K5 || 0) +
                  (I14 - BGG) * H14 * (values.pk_allgemein_K78 / 12) * values.pk_allgemein_K7) /
                100;
            }
          }

          const M14 = result;
          const N14 = (L14 || 0) + (M14 || 0);
          const anzahl = 1;

          pk_allgemein_anzahl += anzahl;
          N24 += N14 * anzahl;
          N53 += N14 * anzahl;

          if (H14 !== ma.H14) {
            setFieldValue(`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.H14`, H14);
          }
          if (J14 !== ma.J14) {
            setFieldValue(`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.J14`, J14);
          }
          if (L14 !== ma.L14) {
            setFieldValue(`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.L14`, L14);
          }
          if (M14 !== ma.M14) {
            setFieldValue(`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.M14`, M14);
          }
          if (N14 !== ma.N14) {
            setFieldValue(`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.N14`, N14);
          }
        });

        if (N24 !== category.N24) {
          setFieldValue(`pk_allgemein_mitarbeiter.${outerIndex}.N24`, N24);
        }

        if (K14Gesamt !== category.K14Gesamt) {
          setFieldValue(`pk_allgemein_mitarbeiter.${outerIndex}.K14Gesamt`, K14Gesamt);
        }
      });

      if (pk_allgemein_anzahl !== values.pk_allgemein_anzahl) {
        setFieldValue('pk_allgemein_anzahl', pk_allgemein_anzahl);
      }

      if (N53 !== values.pk_allgemein_N53) {
        setFieldValue('pk_allgemein_N53', N53);
      }
    };

    timeout = setTimeout(() => {
      reCalculateMaValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.pk_allgemein_K5,
    values.pk_allgemein_K6,
    values.pk_allgemein_K7,
    values.pk_allgemein_K78,
    values.pk_allgemein_N53,
    values.pk_allgemein_anzahl,
    values.pk_allgemein_mitarbeiter
  ]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
