import React from 'react';
import SelectFormView from 'components/SelectFormView/index';
import { Typography, Stack } from '@mui/material';
import useFormLiteral from './useFormLiteral';

// ==============================|| SAMPLE PAGE ||============================== //

const FormOverview = () => {
  const formLiteral = useFormLiteral();
  const headlineSectionStyle = {
    mb: { xs: 2, md: 2, lg: 3 },
    // mt: { xs: 5, md: 6, lg: 7 },
    fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' }
  };

  return (
    <Stack mb={6}>
      <Typography variant="h2" sx={headlineSectionStyle}>
        Kalkulationen
      </Typography>
      <SelectFormView formType="stundensatz" sections={Object.values(formLiteral)} />
    </Stack>
  );
};

export default FormOverview;
