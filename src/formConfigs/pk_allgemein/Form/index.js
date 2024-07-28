import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Stammdaten from './Stammdaten';
import Angaben from './Angaben';
import Zusammenfassung from './Zusammenfassung';

const PKAllgemein = () => {
  return (
    <>
      <CalculationUpdater />
      <Angaben />
      <Stammdaten />
      <Zusammenfassung />
    </>
  );
};

export default PKAllgemein;
