import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Stundenverrechnungssatz from './Stundenverrechnungssatz';

const StdVerrechnungssaetze = () => {
  return (
    <>
      <CalculationUpdater />
      <Start />
      <Stundenverrechnungssatz />
    </>
  );
};

export default StdVerrechnungssaetze;
