import { InlineWidget } from 'react-calendly';
import { Stack } from '@mui/material';

const SectionCalendar = () => {
  return (
    <Stack sx={{ mt: { md: 12, lg: 16 } }}>
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
