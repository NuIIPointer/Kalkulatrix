import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Stundenverrechnungssatz from './Stundenverrechnungssatz';

const StdVerrechnungssaetze = () => {
  return (
    <>
      <CalculationUpdater />
      <Stundenverrechnungssatz />
    </>
  );
};

export default StdVerrechnungssaetze;
