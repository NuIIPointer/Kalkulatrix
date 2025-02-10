import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const ContactIntern = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: { xs: theme.spacing(4), sm: theme.spacing(10), md: theme.spacing(16), lg: theme.spacing(20) }
      }}
    >
      <Typography variant="h1" sx={{ mb: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(10) } }}>
        Kontakt
        <Typography component="span" variant="h2" sx={{ color: theme.palette.secondary[500], display: 'block' }}>
          Kalkulatrix
        </Typography>
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Bei Fragen senden Sie bitte eine E-Mail an <a href="mailto:support@kalkulatrix.de">support@kalkulatrix.de</a>.
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Wir freuen uns über Ihr Feedback und beantworten gerne Ihre Fragen. Zögern Sie nicht, uns zu kontaktieren, wenn Sie Unterstützung
        benötigen oder Anregungen haben. Unser Team steht Ihnen jederzeit zur Verfügung.
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Besuchen Sie auch unsere FAQ-Seite, um Antworten auf häufig gestellte Fragen zu finden. Dort finden Sie nützliche Informationen zu
        unseren Produkten und Services.
      </Typography>
    </Box>
  );
};

export default ContactIntern;
