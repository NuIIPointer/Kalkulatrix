import React, { memo } from 'react';

// project import
import Zuschlaege from './Zuschlaege';
// import Zusammenfassung from './Zusammenfassung';

const GKDeckung = memo(() => {
  return (
    <>
      <Zuschlaege />
      {/* <Zusammenfassung /> */}
    </>
  );
});

export default GKDeckung;
