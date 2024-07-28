import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Zuschlaege from './Zuschlaege';
import Zusammenfassung from './Zusammenfassung';

const GKDeckung = () => {
  return (
    <>
      <CalculationUpdater />
      <Zuschlaege />
      <Zusammenfassung />
    </>
  );
};

export default GKDeckung;
