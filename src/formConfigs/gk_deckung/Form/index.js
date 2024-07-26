import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Zuschlaege from './Zuschlaege';
import Zusammenfassung from './Zusammenfassung';

const GKDeckung = () => {
  return (
    <>
      <CalculationUpdater />
      <Start />
      <Zuschlaege />
      <Zusammenfassung />
    </>
  );
};

export default GKDeckung;
