import { InlineWidget } from 'react-calendly';
import { Stack, Typography } from '@mui/material';

const SectionCalendar = () => {
  return (
    <Stack sx={{ mt: { md: 12, lg: 16 } }}>
      <Typography variant="h2" align="center" sx={{ fontSize: { xs: 22, sm: 28, md: 36, lg: 48 } }}>
        Noch Fragen?
        <Typography variant="span" fontSize={{ xs: 18, sm: 22, md: 28, lg: 34 }} fontWeight={400} display="block">
          Jetzt einen Beratungstermin vereinbaren
        </Typography>
      </Typography>
      <InlineWidget
        url="https://calendly.com/adel-consulting/30min"
        styles={{
          height: '700px'
        }}
      />
    </Stack>
  );
};

export default SectionCalendar;
