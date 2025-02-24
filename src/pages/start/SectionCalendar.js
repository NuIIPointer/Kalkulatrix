import { InlineWidget } from 'react-calendly';
import { Stack, Typography } from '@mui/material';
import ConsentWrapper from 'components/ConsentWrapper/index';
import { Link } from 'react-router-dom';

const SectionCalendar = () => {
  return (
    <Stack sx={{ mt: { xs: 8, md: 12, lg: 16 } }}>
      <Typography variant="h2" align="center" sx={{ fontSize: { xs: 22, sm: 28, md: 36, lg: 48 } }}>
        <Typography variant="span" mb={{ xs: 1, sm: 2, md: 3, lg: 4 }} display="block">
          Noch Fragen?
        </Typography>
      </Typography>
      <Typography align="center" variant="body1" fontSize={{ xs: 18, sm: 22, md: 28, lg: 34 }} mb={{ xs: 0.5, md: 1 }} display="block">
        In unserer <Link to="/faq">FAQ</Link> werden viele Fragen bereits beantwortet.
      </Typography>
      <Typography align="center" variant="body1" fontSize={{ xs: 18, sm: 22, md: 28, lg: 34 }} mb={{ xs: 0.5, md: 1 }} display="block">
        Ansonsten freuen wir uns auf Ihre Kontaktaufnahme über einen Beratungstermin.
      </Typography>

      <ConsentWrapper title="Kalender - Termin vereinbaren" consentKeys={['necessary']} sx={{ maxWidth: '1000px', mx: 'auto', my: 4 }}>
        <InlineWidget
          url="https://calendly.com/adel-consulting/30min"
          styles={{
            height: '700px'
          }}
        />
      </ConsentWrapper>
    </Stack>
  );
};

export default SectionCalendar;
