import React from 'react';
import SelectFormView from 'components/SelectFormView/index';
import { useTheme } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';
import useFormLiteral from './useFormLiteral';

// ==============================|| SAMPLE PAGE ||============================== //

const FormOverview = () => {
  const theme = useTheme();
  const formLiteral = useFormLiteral();
  const headlineSectionStyle = {
    mb: { xs: 2, md: 2, lg: 3 },
    mt: { xs: 5, md: 6, lg: 7 }
  };

  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary[400]}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary[400]}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.white.main}, transparent 100%)`;

  return (
    <Stack mb={6}>
      <ColoredSection
        bgColor={theme.palette.primary.dark}
        bgGradient={headerBgColor}
        headline="Stundensatzkalkulator"
        description="asdojaosidj98 a9sudj ud 98ausd ujas98d jas9d ijoas9d9ash"
      />
      <Typography variant="h2" sx={headlineSectionStyle}>
        Angabensets
      </Typography>
      <SelectFormView formType="stundensatz" sections={Object.values(formLiteral)} />
    </Stack>
  );
};

export default FormOverview;
