import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import useGetFeiertage from 'hooks/useGetFeiertage';

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();
  const { feiertageWochentage } = useGetFeiertage(
    values.annahmen_allgemein_unternehmensBundesland,
    values.annahmen_allgemein_planjahr,
    values.annahmen_G17_days || undefined
  );

  // Tage pro Jahr
  useEffect(() => {
    const year = values.annahmen_allgemein_planjahr;
    const numberOfDays = (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;

    if (numberOfDays !== values.days_of_year) {
      setFieldValue('days_of_year', numberOfDays);
    }
  }, [values.annahmen_allgemein_planjahr, values.days_of_year, setFieldValue]);

  // Wochenarbeitstage
  useEffect(() => {
    const arbeitsTageCount = values.annahmen_G17_days ? values.annahmen_G17_days?.length : 5;
    if (arbeitsTageCount !== values.annahmen_G17) {
      setFieldValue('annahmen_G17', arbeitsTageCount);
    }
  }, [values.annahmen_G17_days, values.annahmen_G17, setFieldValue]);

  // Feiertage
  useEffect(() => {
    if (feiertageWochentage > 0) {
      setFieldValue('annahmen_G25', feiertageWochentage);
    }
  }, [feiertageWochentage, setFieldValue]);

  // Produktivstunden
  useEffect(() => {
    if (values.annahmen_G16 !== undefined && values.annahmen_G17 !== undefined) {
      const durchschnittArbeitsstundenProTag = values.annahmen_G16 / values.annahmen_G17 || 0;
      setFieldValue('annahmen_G18', durchschnittArbeitsstundenProTag);
    }
  }, [values.annahmen_G16, values.annahmen_G17, setFieldValue]);

  useEffect(() => {
    const countWeekends = (year) => {
      let count = 0;
      let date = new Date(year, 0, 1); // Startdatum ist der 1. Januar des gegebenen Jahres

      while (date.getFullYear() === year) {
        const dayOfWeek = date.getDay();
        if (!(values.annahmen_G17_days || [1, 2, 3, 4, 5]).includes(dayOfWeek)) {
          // 0 steht für Sonntag, 6 für Samstag
          count++;
        }
        date.setDate(date.getDate() + 1); // Gehe zum nächsten Tag
      }

      return count;
    };

    if (values.annahmen_allgemein_planjahr) {
      const weekendDays = countWeekends(values.annahmen_allgemein_planjahr);
      if (weekendDays !== values.annahmen_G22) {
        setFieldValue('annahmen_G22', weekendDays);
      }
    } else if (values.annahmen_G22) {
      setFieldValue('annahmen_G22', undefined);
    }
  }, [setFieldValue, values.annahmen_allgemein_planjahr, values.annahmen_G22, values.annahmen_G17_days]);

  useEffect(() => {
    if (
      values.annahmen_G16 !== undefined &&
      values.annahmen_G17 !== undefined &&
      values.annahmen_G18 !== undefined &&
      values.annahmen_G22 !== undefined
    ) {
      const arbeitsstundenProJahr = values.days_of_year * values.annahmen_G18 || 0;
      const wochenendArbeitsstundenProJahr = values.annahmen_G22 * values.annahmen_G18 || 0;
      const jahresarbeitszzeitInTagen = values.days_of_year - values.annahmen_G22 || 0;
      const jahresArbeitszeitInStunden = arbeitsstundenProJahr - wochenendArbeitsstundenProJahr || 0;

      jahresArbeitszeitInStunden !== values.annahmen_H23 && setFieldValue('annahmen_H23', jahresArbeitszeitInStunden);
      jahresarbeitszzeitInTagen !== values.annahmen_G23 && setFieldValue('annahmen_G23', jahresarbeitszzeitInTagen);
    }
  }, [
    values.annahmen_G16,
    values.annahmen_G17,
    values.annahmen_G18,
    values.annahmen_G22,
    setFieldValue,
    values.annahmen_H23,
    values.annahmen_G23,
    values.days_of_year
  ]);

  // Produktivstunden 2
  useEffect(() => {
    const summeNichtanwesenheitInTagen =
      (values.annahmen_G25 || 0) + (values.annahmen_G26 || 0) + (values.annahmen_G27 || 0) + (values.annahmen_G28 || 0) || 0;

    const summeNichtanwesenheitInStunden = summeNichtanwesenheitInTagen * (values.annahmen_G18 || 0) || 0;

    summeNichtanwesenheitInTagen !== values.annahmen_G29 && setFieldValue('annahmen_G29', summeNichtanwesenheitInTagen);
    summeNichtanwesenheitInStunden !== values.annahmen_H29 && setFieldValue('annahmen_H29', summeNichtanwesenheitInStunden);
  }, [
    values.annahmen_G18,
    values.annahmen_G25,
    values.annahmen_G26,
    values.annahmen_G27,
    values.annahmen_G28,
    setFieldValue,
    values.annahmen_G29,
    values.annahmen_H29
  ]);

  // Produktivstunden 3
  useEffect(() => {
    const anwesenheitszeitInTagen = (values.annahmen_G23 || 0) - (values.annahmen_G29 || 0) || 0;
    const anwesenheitszeitInStunden = (values.annahmen_H23 || 0) - (values.annahmen_H29 || 0) || 0;

    anwesenheitszeitInTagen !== values.annahmen_G31 && setFieldValue('annahmen_G31', anwesenheitszeitInTagen);
    anwesenheitszeitInStunden !== values.annahmen_H31 && setFieldValue('annahmen_H31', anwesenheitszeitInStunden);
  }, [
    values.annahmen_G29,
    values.annahmen_H29,
    setFieldValue,
    values.annahmen_G31,
    values.annahmen_H31,
    values.annahmen_G23,
    values.annahmen_H23
  ]);

  // Lohnnebenkostensatz
  useEffect(() => {
    // const G38 = values.annahmen_G29 + values.annahmen_G31 || 0;
    const sonderzahlungenInTagen = ((values.annahmen_H23 || 0) / (values.annahmen_G18 || 0) / 12) * (values.annahmen_E39 || 0);
    const G38 = (values.annahmen_G29 || 0) + (values.annahmen_G31 || 0) + (sonderzahlungenInTagen || 0) || 0;
    const G41 = (values.annahmen_E41 / 100) * G38 || 0;
    const G42 = (values.annahmen_E42 / 100) * G38 || 0;
    const G44 = G38 + G41 + G42 || 0;
    const I46 = (G44 / values.annahmen_G31 - 1) * 100 || 0;

    if (I46 !== values.annahmen_I46) {
      setFieldValue('annahmen_I46', I46);
    }
  }, [
    setFieldValue,
    values.annahmen_I46,
    values.annahmen_E39,
    values.annahmen_E42,
    values.annahmen_E41,
    values.annahmen_G31,
    values.annahmen_G29,
    values.annahmen_H23,
    values.annahmen_G18
  ]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
