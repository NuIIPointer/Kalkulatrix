import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import CalculationUpdaterAnnahmen from '../../annahmen/CalculationUpdater/index';
import CalculationUpdaterGemeinkosten from '../../gemeinkosten/CalculationUpdater/index';
import CalculationUpdaterGKDeckung from '../../gk_deckung/CalculationUpdater/index';
import CalculationUpdaterPKAllgemein from '../../pk_allgemein/CalculationUpdater/index';
import CalculationUpdaterPKProduktiv from '../../pk_produktiv/CalculationUpdater/index';
import CalculationUpdaterVerrechnungssaetze from '../../std_verrechnungssaetze/CalculationUpdater/index';
import Start from './Start';
import Stundendeckungsbeitragsziele from './Stundendeckungsbeitragsziele';
import TheoretischerDBS from './TheoretischerDBS';
import { UserContext } from 'context/user';
import validationSchema from '../rules/validation/schema';

const StdVerrechnungssaetze = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    deckungsbeitraege_J25: undefined,
    ...(activeFormData.values || {}),
    formTitle: activeFormData.title,
    letzteAenderung: activeFormData?.values?.lastChanged
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnChange>
      {() => (
        <Form autoComplete="off">
          <CalculationUpdater />
          <CalculationUpdaterAnnahmen />
          <CalculationUpdaterGemeinkosten />
          <CalculationUpdaterGKDeckung />
          <CalculationUpdaterPKAllgemein />
          <CalculationUpdaterPKProduktiv />
          <CalculationUpdaterVerrechnungssaetze />
          <Start />
          <Stundendeckungsbeitragsziele />
          <TheoretischerDBS />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default StdVerrechnungssaetze;
