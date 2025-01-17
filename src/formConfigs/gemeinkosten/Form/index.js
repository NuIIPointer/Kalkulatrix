import React, { memo } from 'react';

// project import
import Materialgemeinkosten from './Materialgemeinkosten';
import Personalgemeinkosten from './Personalgemeinkosten';
import Sachkosten from './Sachkosten';
import Zusatzkosten from './Zusatzkosten';
import Zusammenfassung from './Zusammenfassung';

const TestForm = memo(() => {
  return (
    <>
      <Materialgemeinkosten />
      <Personalgemeinkosten />
      <Sachkosten />
      <Zusatzkosten />
      <Zusammenfassung />
    </>
  );
});

export default TestForm;
