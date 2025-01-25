import React, { memo } from 'react';

// project import
import Stammdaten from './Stammdaten';
// import Zusammenfassung from './Zusammenfassung';

const TestForm = memo(() => {
  return (
    <>
      <Stammdaten />
      {/* <Zusammenfassung /> */}
    </>
  );
});

export default TestForm;
