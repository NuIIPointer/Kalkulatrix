import React, { memo } from 'react';

// project import
import Stundendeckungsbeitragsziele from './Stundendeckungsbeitragsziele';
import TheoretischerDBS from './TheoretischerDBS';
import Stundenverrechnungssatz from './Stundenverrechnungssatz';
import Plangewinn from './Plangewinn';

const StdVerrechnungssaetze = memo(() => {
  return (
    <>
      <Plangewinn />
      <Stundenverrechnungssatz />
      <Stundendeckungsbeitragsziele />
      <TheoretischerDBS />
    </>
  );
});

export default StdVerrechnungssaetze;
