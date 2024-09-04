import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import CalculationUpdaterStdVerrechnungssaetze from '../CalculationUpdater/stdVerrechnungssaetze';
import Stundendeckungsbeitragsziele from './Stundendeckungsbeitragsziele';
import TheoretischerDBS from './TheoretischerDBS';
import Stundenverrechnungssatz from './Stundenverrechnungssatz';
import Plangewinn from './Plangewinn';

const StdVerrechnungssaetze = () => {
  return (
    <>
      <CalculationUpdater />
      <CalculationUpdaterStdVerrechnungssaetze />
      <Plangewinn />
      <Stundenverrechnungssatz />
      <Stundendeckungsbeitragsziele />
      <TheoretischerDBS />
    </>
  );
};

export default StdVerrechnungssaetze;
