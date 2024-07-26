import React from 'react';

// project import
import CalculationUpdater from '../CalculationUpdater/index';
import CalculationUpdaterAnnahmen from '../../annahmen/CalculationUpdater/index';
import CalculationUpdaterGemeinkosten from '../../gemeinkosten/CalculationUpdater/index';
import CalculationUpdaterGKDeckung from '../../gk_deckung/CalculationUpdater/index';
import CalculationUpdaterPKAllgemein from '../../pk_allgemein/CalculationUpdater/index';
import CalculationUpdaterPKProduktiv from '../../pk_produktiv/CalculationUpdater/index';
import CalculationUpdaterVerrechnungssaetze from '../../std_verrechnungssaetze/CalculationUpdater/index';
import Start from './Start';
import Stundendeckungsbeitragsziele from './Stundendeckungsbeitragsziele';
import TheoretischerDBS from './TheoretischerDBS';

const StdVerrechnungssaetze = () => {
  return (
    <>
      <CalculationUpdater />
      <CalculationUpdaterAnnahmen />
      <CalculationUpdaterGemeinkosten />
      <CalculationUpdaterGKDeckung />
      <CalculationUpdaterPKAllgemein />
      <CalculationUpdaterPKProduktiv />
      <CalculationUpdaterVerrechnungssaetze />
      <Start />
      <Stundendeckungsbeitragsziele />
      <TheoretischerDBS />
    </>
  );
};

export default StdVerrechnungssaetze;
