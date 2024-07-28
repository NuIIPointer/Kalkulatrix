import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Stammdaten from './Stammdaten';
import Zusammenfassung from './Zusammenfassung';

const TestForm = () => {
  return (
    <>
      <CalculationUpdater />
      <Stammdaten />
      <Zusammenfassung />
    </>
  );
};

export default TestForm;
