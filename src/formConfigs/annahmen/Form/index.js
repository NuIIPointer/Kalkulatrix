import React, { memo } from 'react';

// project import
import Annahmen from './Annahmen';
import Produktivstunden from './Produktivstunden';
import Lohnnebenkostensatz from './Lohnnebenkostensatz';

const TestForm = memo(() => {
  return (
    <>
      <Annahmen />
      <Produktivstunden />
      <Lohnnebenkostensatz />
    </>
  );
});

export default TestForm;
