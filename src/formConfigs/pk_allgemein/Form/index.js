import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Stammdaten from './Stammdaten';
import Angaben from './Angaben';
import Zusammenfassung from './Zusammenfassung';
import { UserContext } from 'context/user';
import validationSchema from '../rules/validation/schema';

const PKAllgemein = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    formTitle: activeFormData.title,
    pk_allgemein_K6: 5175,
    pk_allgemein_K7: undefined,
    pk_allgemein_K78: undefined,
    pk_allgemein_mitarbeiter: [],
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
      validateOnSubmit
    >
      {({ touched, initialValues }) => (
        <Form autoComplete="off">
          {console.log('touched', touched, initialValues)}
          <CalculationUpdater />
          <Start />
          <Angaben />
          <Stammdaten />
          <Zusammenfassung />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default PKAllgemein;
