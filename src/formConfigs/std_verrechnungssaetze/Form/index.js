import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Stundenverrechnungssatz from './Stundenverrechnungssatz';
import { UserContext } from 'context/user';
import validationSchema from '../rules/validation/schema';

const StdVerrechnungssaetze = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
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
          <Stundenverrechnungssatz />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default StdVerrechnungssaetze;
