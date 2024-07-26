import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Materialgemeinkosten from './Materialgemeinkosten';
import Personalgemeinkosten from './Personalgemeinkosten';
import Sachkosten from './Sachkosten';
import Zusatzkosten from './Zusatzkosten';
import Zusammenfassung from './Zusammenfassung';

const TestForm = () => {
  return (
    <>
      <CalculationUpdater />
      <Start />
      <Materialgemeinkosten />
      <Personalgemeinkosten />
      <Sachkosten />
      <Zusatzkosten />
      <Zusammenfassung />
    </>
  );
};

export default TestForm;
