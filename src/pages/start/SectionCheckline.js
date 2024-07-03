import React from 'react';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Checkline from 'components/Checkline/index';

const SectionCheckline = ({ isActive }) => {
  const theme = useTheme();
  const items = [
    { title: 'Daten erfassen', delay: 0 },
    { title: 'Stundensatz kalkulieren', delay: 200 },
    { title: 'Handlungsempfehlungen erhalten', delay: 400 },
    { title: 'Umsetzen im Betrieb', delay: 600 }
  ];

  console.log('isActive', isActive);

  return (
    <Stack
      sx={{
        paddingY: {
          xs: theme.spacing(4),
          sm: theme.spacing(5),
          lg: theme.spacing(8),
          xl: theme.spacing(12)
        },
        paddingX: {
          xs: theme.spacing(4),
          md: 0
        }
      }}
    >
      <Checkline items={items} />
    </Stack>
  );
};

export default SectionCheckline;
