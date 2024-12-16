import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    clearTimeout(timeout);
    const reCalculateMzFlValues = () => {
      // Anwesenheitsentgeld (gesamt) START
      let H20 = 0;
      let H8Summe = 0;
      let E8Summe = 0;

      values.gk_deckung_zuschlaege?.forEach((category, outerIndex) => {
        let H12 = 0;
        let H8GruppeSumme = 0;
        let G8GruppeSumme = 0;
        let E8GruppeSumme = 0;
        let F8GruppeSumme = 0;

        category.fields?.forEach((item, innerIndex) => {
          const G8 = (item.E8 || 0) + ((item.E8 || 0) * (item.F8 || 0)) / 100;
          const H8 = (G8 || 0) - (item.E8 || 0);

          H8GruppeSumme += H8 || 0;
          G8GruppeSumme += item.G8 || 0;
          E8GruppeSumme += item.E8 || 0;
          F8GruppeSumme += item.F8 || 0;
          H8Summe += item.H8 || 0;
          E8Summe += item.E8 || 0;
          H12 += H8;

          if (G8 !== item.G8) {
            setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.G8`, G8);
          }
          if (H8 !== item.H8) {
            setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.H8`, H8);
          }
        });

        const F8GruppeDurchschnitt = F8GruppeSumme / category.fields.length;

        if (F8GruppeDurchschnitt !== category.F8GruppeDurchschnitt) {
          setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.F8GruppeDurchschnitt`, F8GruppeDurchschnitt);
        }

        if (H8GruppeSumme !== category.H8GruppeSumme) {
          setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.H8GruppeSumme`, H8GruppeSumme);
        }
        if (G8GruppeSumme !== category.G8GruppeSumme) {
          setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.G8GruppeSumme`, G8GruppeSumme);
        }
        if (E8GruppeSumme !== category.E8GruppeSumme) {
          setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.E8GruppeSumme`, E8GruppeSumme);
        }

        if (H12 !== category.H12) {
          setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.H12`, H12);
        }

        H20 += H12;
      });

      const zuschlagProzentDurchschnitt = H8Summe / E8Summe;

      if (zuschlagProzentDurchschnitt !== values.zuschlagProzentDurchschnitt) {
        setFieldValue(`zuschlagProzentDurchschnitt`, zuschlagProzentDurchschnitt);
      }

      if (H20 !== values.gk_deckung_H20) {
        setFieldValue(`gk_deckung_H20`, H20);
        setFieldValue(`gk_deckung_H43`, H20);
      }

      // Anwesenheitsentgeld (gesamt) ENDE
    };

    timeout = setTimeout(() => {
      reCalculateMzFlValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.E8Summe,
    values.F8Summe,
    values.H8Summe,
    values.gk_deckung_H20,
    values.gk_deckung_zuschlaege,
    values.zuschlagProzentDurchschnitt
  ]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
