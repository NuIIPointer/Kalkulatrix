import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import Stundendeckungsbeitragsziele from './Stundendeckungsbeitragsziele';
import TheoretischerDBS from './TheoretischerDBS';
import Stundenverrechnungssatz from './Stundenverrechnungssatz';
import Plangewinn from './Plangewinn';

const StdVerrechnungssaetze = () => {
  return (
    <>
      <CalculationUpdater />
      <Plangewinn />
      <Stundenverrechnungssatz />
      <Stundendeckungsbeitragsziele />
      <TheoretischerDBS />
    </>
  );
};

export default StdVerrechnungssaetze;
