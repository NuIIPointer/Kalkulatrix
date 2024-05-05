import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import CalculationUpdaterGkStundensaetze from '../CalculationUpdater/gk_stundensaetze';
import Start from './Start';
import Annahmen from './Annahmen';
import { UserContext } from 'context/user';
import Produktivstunden from './Produktivstunden';
import Lohnnebenkostensatz from './Lohnnebenkostensatz';
import Plangewinn from './Plangewinn';
import validationSchema from '../rules/validation/schema';

const TestForm = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    formTitle: activeFormData.title,
    annahmen_allgemein_planjahr: undefined,
    annahmen_E41: undefined,
    annahmen_G16: undefined,
    annahmen_G17_days: [1, 2, 3, 4, 5],
    ...(activeFormData.values || {}),
    letzteAenderung: activeFormData?.values?.lastChanged
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnChange>
      {() => (
        <Form autoComplete="off">
          <CalculationUpdater />
          <CalculationUpdaterGkStundensaetze />
          <Start />
          <Annahmen />
          <Produktivstunden />
          <Lohnnebenkostensatz />
          <Plangewinn />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
