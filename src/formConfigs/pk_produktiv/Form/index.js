import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Stammdaten from './Stammdaten';
import Zusammenfassung from './Zusammenfassung';
import { UserContext } from 'context/user';
import validationSchema from '../rules/validation/schema';

const TestForm = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    formTitle: activeFormData.title,
    pk_produktiv_mitarbeiter: [],
    ...(activeFormData.values || {}),
    letzteAenderung: activeFormData?.values?.lastChanged
  };

  return (
    <Formik
      key={activeFormData.title}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange
    >
      {() => (
        <Form autoComplete="off">
          <CalculationUpdater />
          <Start />
          <Stammdaten />
          <Zusammenfassung />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
