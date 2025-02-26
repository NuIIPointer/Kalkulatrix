import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const SupportContact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: { xs: theme.spacing(4), sm: theme.spacing(10), md: theme.spacing(16), lg: theme.spacing(20) }
      }}
    >
      <Typography variant="h1" sx={{ mb: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(10) }, textAlign: 'center' }}>
        Kontakt
        <Typography component="span" variant="h2" sx={{ color: theme.palette.secondary[500], display: 'block' }}>
          Kalkulatrix
        </Typography>
      </Typography>
      {/* <Stack sx={{ mb: 2, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
          Wir freuen uns über Ihr Feedback und beantworten gerne Ihre Fragen. Zögern Sie nicht, uns zu kontaktieren, wenn Sie Unterstützung
          benötigen oder Anregungen haben. Unser Team steht Ihnen jederzeit zur Verfügung.
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
          Besuchen Sie auch unsere FAQ-Seite, um Antworten auf häufig gestellte Fragen zu finden. Dort finden Sie nützliche Informationen zu
          unseren Produkten und Services.
        </Typography>
      </Stack> */}
      <Box
        as="iframe"
        src="https://adel-consulting.com/kontakt-kalkulatrix/"
        sx={{
          width: '100%',
          height: { xs: 1320, xl: 860 },
          maxWidth: 1400,
          mx: 'auto',
          display: 'block',
          border: 0,
          borderRadius: theme.shape.borderRadiusBox,
          overflow: 'hidden',
          mt: { xs: 0, sm: 2, md: 4, lg: 6 }
        }}
        title="Kontakt zu Kalulatrix Mitarbeitern"
      />
    </Box>
  );
};

export default SupportContact;
