import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import CalculationUpdaterVerrechnungssaetze from '../../std_verrechnungssaetze/CalculationUpdater/index';
import Start from './Start';
import DGemeinkostenPlangewinn from './DGemeinkostenPlangewinn';
import AufschlagssaetzePK from './AufschlagssaetzePK';
import { UserContext } from 'context/user';
import validationSchema from '../rules/validation/schema';

const GKStundensaetze = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    gk_stundensaetze_H14: undefined,
    ...(activeFormData.values || {}),
    formTitle: activeFormData.title,
    letzteAenderung: activeFormData?.values?.lastChanged
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnChange>
      {() => (
        <Form autoComplete="off">
          <CalculationUpdater />
          <CalculationUpdaterVerrechnungssaetze />{' '}
          {/* Eine Berechnung benötigt auf dieser Seite wird im std_verrechnungssatz calculator berechnet */}
          <Start />
          <DGemeinkostenPlangewinn />
          <AufschlagssaetzePK />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default GKStundensaetze;
