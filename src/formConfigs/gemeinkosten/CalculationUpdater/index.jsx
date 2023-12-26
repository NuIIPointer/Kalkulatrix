import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { sachkosten_fieldTitles, sachkosten_startingRow } from '../Form/Sachkosten';
import { zusatzkosten_fieldTitles, zusatzkosten_startingRow } from '../Form/Zusatzkosten';

let timeout = null;
let timeoutSachkosten = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  // MATERIALGEMEINKOSTEN START

  useEffect(() => {
    const gemeinkosten_material_H9 = ((values.gemeinkosten_material_F9 || 0) * (values.gemeinkosten_material_G9 || 0)) / 100;
    const gemeinkosten_material_I9 = (values.gemeinkosten_material_F9 || 0) - (gemeinkosten_material_H9 || 0);

    if (gemeinkosten_material_H9 !== values.gemeinkosten_material_H9) {
      setFieldValue('gemeinkosten_material_H9', gemeinkosten_material_H9);
    }
    if (gemeinkosten_material_I9 !== values.gemeinkosten_material_I9) {
      setFieldValue('gemeinkosten_material_I9', gemeinkosten_material_I9);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_material_F9,
    values.gemeinkosten_material_G9,
    values.gemeinkosten_material_H9,
    values.gemeinkosten_material_I9
  ]);

  useEffect(() => {
    const gemeinkosten_material_H10 = ((values.gemeinkosten_material_F10 || 0) * (values.gemeinkosten_material_G10 || 0)) / 100;
    const gemeinkosten_material_I10 = (values.gemeinkosten_material_F10 || 0) - (gemeinkosten_material_H10 || 0);

    if (gemeinkosten_material_H10 !== values.gemeinkosten_material_H10) {
      setFieldValue('gemeinkosten_material_H10', gemeinkosten_material_H10);
    }
    if (gemeinkosten_material_I10 !== values.gemeinkosten_material_I10) {
      setFieldValue('gemeinkosten_material_I10', gemeinkosten_material_I10);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_material_F10,
    values.gemeinkosten_material_G10,
    values.gemeinkosten_material_H10,
    values.gemeinkosten_material_I10
  ]);

  useEffect(() => {
    const gemeinkosten_material_H11 = ((values.gemeinkosten_material_F11 || 0) * (values.gemeinkosten_material_G11 || 0)) / 100;
    const gemeinkosten_material_I11 = (values.gemeinkosten_material_F11 || 0) - (gemeinkosten_material_H11 || 0);

    if (gemeinkosten_material_H11 !== values.gemeinkosten_material_H11) {
      setFieldValue('gemeinkosten_material_H11', gemeinkosten_material_H11);
    }
    if (gemeinkosten_material_I11 !== values.gemeinkosten_material_I11) {
      setFieldValue('gemeinkosten_material_I11', gemeinkosten_material_I11);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_material_F11,
    values.gemeinkosten_material_G11,
    values.gemeinkosten_material_H11,
    values.gemeinkosten_material_I11
  ]);

  useEffect(() => {
    const reCalculateGesamtValues = () => {
      const gemeinkosten_F12 =
        (values.gemeinkosten_material_F9 || 0) + (values.gemeinkosten_material_F10 || 0) + (values.gemeinkosten_material_F11 || 0);
      const gemeinkosten_H12 =
        (values.gemeinkosten_material_H9 || 0) + (values.gemeinkosten_material_H10 || 0) + (values.gemeinkosten_material_H11 || 0);
      const gemeinkosten_I12 =
        (values.gemeinkosten_material_I9 || 0) + (values.gemeinkosten_material_I10 || 0) + (values.gemeinkosten_material_I11 || 0);

      if (gemeinkosten_F12 !== values.gemeinkosten_F12) {
        setFieldValue('gemeinkosten_F12', gemeinkosten_F12);
      }
      if (gemeinkosten_H12 !== values.gemeinkosten_H12) {
        setFieldValue('gemeinkosten_H12', gemeinkosten_H12);
      }
      if (gemeinkosten_I12 !== values.gemeinkosten_I12) {
        setFieldValue('gemeinkosten_I12', gemeinkosten_I12);
      }
    };

    timeout = setTimeout(() => {
      reCalculateGesamtValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.gemeinkosten_material_F10,
    values.gemeinkosten_material_F11,
    values.gemeinkosten_F12,
    values.gemeinkosten_material_F9,
    values.gemeinkosten_material_H10,
    values.gemeinkosten_material_H11,
    values.gemeinkosten_H12,
    values.gemeinkosten_material_H9,
    values.gemeinkosten_material_I10,
    values.gemeinkosten_material_I11,
    values.gemeinkosten_I12,
    values.gemeinkosten_material_I9
  ]);

  // MATERIALGEMEINKOSTEN ENDE

  // MATERIALGEMEINKOSTEN START

  useEffect(() => {
    const gemeinkosten_personal_F15 = values.pk_produktiv_Q42 || 0;

    if (gemeinkosten_personal_F15 !== values.gemeinkosten_personal_F15) {
      setFieldValue('gemeinkosten_personal_F15', gemeinkosten_personal_F15);
    }
  }, [setFieldValue, values.gemeinkosten_personal_F15, values.pk_produktiv_Q42]);

  useEffect(() => {
    const gemeinkosten_personal_F16 = values.pk_produktiv_N53 || 0;

    if (gemeinkosten_personal_F16 !== values.gemeinkosten_personal_F16) {
      setFieldValue('gemeinkosten_personal_F16', gemeinkosten_personal_F16);
    }
  }, [setFieldValue, values.gemeinkosten_personal_F16, values.pk_produktiv_N53]);

  useEffect(() => {
    const gemeinkosten_personal_H15 = ((values.gemeinkosten_personal_F15 || 0) * (values.gemeinkosten_personal_G15 || 0)) / 100;
    const gemeinkosten_personal_I15 = (values.gemeinkosten_personal_F15 || 0) - (gemeinkosten_personal_H15 || 0);

    if (gemeinkosten_personal_H15 !== values.gemeinkosten_personal_H15) {
      setFieldValue('gemeinkosten_personal_H15', gemeinkosten_personal_H15);
    }
    if (gemeinkosten_personal_I15 !== values.gemeinkosten_personal_I15) {
      setFieldValue('gemeinkosten_personal_I15', gemeinkosten_personal_I15);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_personal_F15,
    values.gemeinkosten_personal_G15,
    values.gemeinkosten_personal_H15,
    values.gemeinkosten_personal_I15
  ]);

  useEffect(() => {
    const gemeinkosten_personal_H16 = ((values.gemeinkosten_personal_F16 || 0) * (values.gemeinkosten_personal_G16 || 0)) / 160;
    const gemeinkosten_personal_I16 = (values.gemeinkosten_personal_F16 || 0) - (gemeinkosten_personal_H16 || 0);

    if (gemeinkosten_personal_H16 !== values.gemeinkosten_personal_H16) {
      setFieldValue('gemeinkosten_personal_H16', gemeinkosten_personal_H16);
    }
    if (gemeinkosten_personal_I16 !== values.gemeinkosten_personal_I16) {
      setFieldValue('gemeinkosten_personal_I16', gemeinkosten_personal_I16);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_personal_F16,
    values.gemeinkosten_personal_G16,
    values.gemeinkosten_personal_H16,
    values.gemeinkosten_personal_I16
  ]);

  useEffect(() => {
    const gemeinkosten_personal_H17 = ((values.gemeinkosten_personal_F17 || 0) * (values.gemeinkosten_personal_G17 || 0)) / 100;
    const gemeinkosten_personal_I17 = (values.gemeinkosten_personal_F17 || 0) - (gemeinkosten_personal_H17 || 0);

    if (gemeinkosten_personal_H17 !== values.gemeinkosten_personal_H17) {
      setFieldValue('gemeinkosten_personal_H17', gemeinkosten_personal_H17);
    }
    if (gemeinkosten_personal_I17 !== values.gemeinkosten_personal_I17) {
      setFieldValue('gemeinkosten_personal_I17', gemeinkosten_personal_I17);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_personal_F17,
    values.gemeinkosten_personal_G17,
    values.gemeinkosten_personal_H17,
    values.gemeinkosten_personal_I17
  ]);

  useEffect(() => {
    const reCalculateGesamtValues = () => {
      const gemeinkosten_F18 =
        (values.gemeinkosten_personal_F15 || 0) + (values.gemeinkosten_personal_F16 || 0) + (values.gemeinkosten_personal_F17 || 0);
      const gemeinkosten_H18 =
        (values.gemeinkosten_personal_H15 || 0) + (values.gemeinkosten_personal_H16 || 0) + (values.gemeinkosten_personal_H17 || 0);
      const gemeinkosten_I18 =
        (values.gemeinkosten_personal_I15 || 0) + (values.gemeinkosten_personal_I16 || 0) + (values.gemeinkosten_personal_I17 || 0);

      if (gemeinkosten_F18 !== values.gemeinkosten_F18) {
        setFieldValue('gemeinkosten_F18', gemeinkosten_F18);
      }
      if (gemeinkosten_H18 !== values.gemeinkosten_H18) {
        setFieldValue('gemeinkosten_H18', gemeinkosten_H18);
      }
      if (gemeinkosten_I18 !== values.gemeinkosten_I18) {
        setFieldValue('gemeinkosten_I18', gemeinkosten_I18);
      }
    };

    timeout = setTimeout(() => {
      reCalculateGesamtValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.gemeinkosten_personal_F15,
    values.gemeinkosten_personal_F16,
    values.gemeinkosten_personal_F17,
    values.gemeinkosten_F18,
    values.gemeinkosten_personal_H15,
    values.gemeinkosten_personal_H16,
    values.gemeinkosten_personal_H17,
    values.gemeinkosten_H18,
    values.gemeinkosten_personal_I15,
    values.gemeinkosten_personal_I16,
    values.gemeinkosten_personal_I17,
    values.gemeinkosten_I18
  ]);

  // MATERIALGEMEINKOSTEN ENDE

  // SACHKOSTENKOSTEN START

  useEffect(() => {
    const reCalculateSachkostenValues = () => {
      let gemeinkosten_F39 = 0;
      let gemeinkosten_H39 = 0;
      let gemeinkosten_I39 = 0;

      sachkosten_fieldTitles.forEach((_title, index) => {
        const fieldRow = sachkosten_startingRow + index;
        const F_fieldKey = `gemeinkosten_sachkosten_F${fieldRow}`;
        const G_fieldKey = `gemeinkosten_sachkosten_G${fieldRow}`;
        const H_fieldKey = `gemeinkosten_sachkosten_H${fieldRow}`;
        const I_fieldKey = `gemeinkosten_sachkosten_I${fieldRow}`;

        const H_fieldValue = ((values[F_fieldKey] || 0) * (values[G_fieldKey] || 0)) / 100;
        const I_fieldValue = (values[F_fieldKey] || 0) - (H_fieldValue || 0);

        gemeinkosten_F39 += values[F_fieldKey] || 0;
        gemeinkosten_H39 += H_fieldValue || 0;
        gemeinkosten_I39 += I_fieldValue || 0;

        if (H_fieldValue !== values[H_fieldKey]) {
          setFieldValue(H_fieldKey, H_fieldValue);
        }
        if (I_fieldValue !== values[I_fieldValue]) {
          setFieldValue(I_fieldKey, I_fieldValue);
        }
      });

      if (gemeinkosten_F39 !== values.gemeinkosten_F39) {
        setFieldValue('gemeinkosten_F39', gemeinkosten_F39);
      }
      if (gemeinkosten_H39 !== values.gemeinkosten_H39) {
        setFieldValue('gemeinkosten_H39', gemeinkosten_H39);
      }
      if (gemeinkosten_I39 !== values.gemeinkosten_I39) {
        setFieldValue('gemeinkosten_I39', gemeinkosten_I39);
      }
    };

    timeoutSachkosten = setTimeout(() => {
      reCalculateSachkostenValues();
    }, 600);

    return () => {
      clearTimeout(timeoutSachkosten);
    };
  }, [setFieldValue, values]);

  // SACHKOSTENKOSTEN ENDE

  // ZUSATZKOSTEN START

  useEffect(() => {
    const reCalculateZusatzkostenValues = () => {
      let gemeinkosten_F47 = 0;
      let gemeinkosten_H47 = 0;
      let gemeinkosten_I47 = 0;

      zusatzkosten_fieldTitles.forEach((_title, index) => {
        const fieldRow = zusatzkosten_startingRow + index;
        const F_fieldKey = `gemeinkosten_zusatzkosten_F${fieldRow}`;
        const G_fieldKey = `gemeinkosten_zusatzkosten_G${fieldRow}`;
        const H_fieldKey = `gemeinkosten_zusatzkosten_H${fieldRow}`;
        const I_fieldKey = `gemeinkosten_zusatzkosten_I${fieldRow}`;

        const H_fieldValue = ((values[F_fieldKey] || 0) * (values[G_fieldKey] || 0)) / 100;
        const I_fieldValue = (values[F_fieldKey] || 0) - (H_fieldValue || 0);

        gemeinkosten_F47 += values[F_fieldKey] || 0;
        gemeinkosten_H47 += H_fieldValue || 0;
        gemeinkosten_I47 += I_fieldValue || 0;

        if (H_fieldValue !== values[H_fieldKey]) {
          setFieldValue(H_fieldKey, H_fieldValue);
        }
        if (I_fieldValue !== values[I_fieldValue]) {
          setFieldValue(I_fieldKey, I_fieldValue);
        }
      });

      if (gemeinkosten_F47 !== values.gemeinkosten_F47) {
        setFieldValue('gemeinkosten_F47', gemeinkosten_F47);
      }
      if (gemeinkosten_H47 !== values.gemeinkosten_H47) {
        setFieldValue('gemeinkosten_H47', gemeinkosten_H47);
      }
      if (gemeinkosten_I47 !== values.gemeinkosten_I47) {
        setFieldValue('gemeinkosten_I47', gemeinkosten_I47);
      }
    };

    timeoutSachkosten = setTimeout(() => {
      reCalculateZusatzkostenValues();
    }, 600);

    return () => {
      clearTimeout(timeoutSachkosten);
    };
  }, [setFieldValue, values]);

  // ZUSATZKOSTEN ENDE

  // GESAMTKOSTEN START

  useEffect(() => {
    const gemeinkosten_F49 =
      (values.gemeinkosten_F12 || 0) + (values.gemeinkosten_F18 || 0) + (values.gemeinkosten_F39 || 0) + (values.gemeinkosten_F47 || 0);

    if (gemeinkosten_F49 !== values.gemeinkosten_F49) {
      setFieldValue('gemeinkosten_F49', gemeinkosten_F49);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_F12,
    values.gemeinkosten_F18,
    values.gemeinkosten_F39,
    values.gemeinkosten_F47,
    values.gemeinkosten_F49
  ]);

  useEffect(() => {
    const gemeinkosten_H49 =
      (values.gemeinkosten_H12 || 0) + (values.gemeinkosten_H18 || 0) + (values.gemeinkosten_H39 || 0) + (values.gemeinkosten_H47 || 0);

    if (gemeinkosten_H49 !== values.gemeinkosten_H49) {
      setFieldValue('gemeinkosten_H49', gemeinkosten_H49);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_H12,
    values.gemeinkosten_H18,
    values.gemeinkosten_H39,
    values.gemeinkosten_H47,
    values.gemeinkosten_H49
  ]);

  useEffect(() => {
    const gemeinkosten_I49 =
      (values.gemeinkosten_I12 || 0) + (values.gemeinkosten_I18 || 0) + (values.gemeinkosten_I39 || 0) + (values.gemeinkosten_I47 || 0);

    if (gemeinkosten_I49 !== values.gemeinkosten_I49) {
      setFieldValue('gemeinkosten_I49', gemeinkosten_I49);
    }
  }, [
    setFieldValue,
    values.gemeinkosten_I12,
    values.gemeinkosten_I18,
    values.gemeinkosten_I39,
    values.gemeinkosten_I47,
    values.gemeinkosten_I49
  ]);

  // GESAMTKOSTEN ENDE

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
