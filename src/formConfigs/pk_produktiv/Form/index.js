import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Stammdaten from './Stammdaten';
import Zusammenfassung from './Zusammenfassung';

const TestForm = () => {
  return (
    <>
      <CalculationUpdater />
      <Start />
      <Stammdaten />
      <Zusammenfassung />
    </>
  );
};

export default TestForm;
