import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Materialgemeinkosten from './Materialgemeinkosten';
import Personalgemeinkosten from './Personalgemeinkosten';
import Sachkosten from './Sachkosten';
import Zusatzkosten from './Zusatzkosten';
import Zusammenfassung from './Zusammenfassung';
import validationSchema from '../rules/validation/schema';

import { UserContext } from 'context/user';

const TestForm = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    gemeinkosten_material_F9: undefined,
    gemeinkosten_material_G9: undefined,
    gemeinkosten_material_F10: undefined,
    gemeinkosten_material_G10: undefined,
    gemeinkosten_material_F11: undefined,
    gemeinkosten_material_G11: undefined,
    gemeinkosten_personal_G15: undefined,
    gemeinkosten_personal_G16: undefined,
    gemeinkosten_personal_F17: undefined,
    gemeinkosten_personal_G17: undefined,
    gemeinkosten_I51: undefined,
    ...(activeFormData.values || {}),
    formTitle: activeFormData.title,
    letzteAenderung: activeFormData?.values?.lastChanged
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnChange>
      {() => (
        <Form autoComplete="off">
          <CalculationUpdater />
          <Start />
          <Materialgemeinkosten />
          <Personalgemeinkosten />
          <Sachkosten />
          <Zusatzkosten />
          <Zusammenfassung />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
