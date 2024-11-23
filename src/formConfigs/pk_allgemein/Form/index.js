import React, { memo } from 'react';

// project import
import Stammdaten from './Stammdaten';
import Angaben from './Angaben';
import Zusammenfassung from './Zusammenfassung';

const PKAllgemein = memo(() => {
  return (
    <>
      <Angaben />
      <Stammdaten />
      <Zusammenfassung />
    </>
  );
});

export default PKAllgemein;
