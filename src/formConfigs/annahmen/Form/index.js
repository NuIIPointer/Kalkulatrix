import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import CalculationUpdaterGkStundensaetze from '../CalculationUpdater/gk_stundensaetze';
import Annahmen from './Annahmen';
import Produktivstunden from './Produktivstunden';
import Lohnnebenkostensatz from './Lohnnebenkostensatz';
import Plangewinn from './Plangewinn';

const TestForm = () => {
  return (
    <>
      <CalculationUpdater />
      <CalculationUpdaterGkStundensaetze />
      <Annahmen />
      <Produktivstunden />
      <Lohnnebenkostensatz />
      <Plangewinn />
    </>
  );
};

export default TestForm;
