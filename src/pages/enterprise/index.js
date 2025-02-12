import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const EnterpriseContact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: { xs: theme.spacing(4), sm: theme.spacing(10), md: theme.spacing(16), lg: theme.spacing(20) }
      }}
    >
      <Typography variant="h1" sx={{ mb: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(10) } }}>
        Enterprise Partner
        <Typography component="span" variant="h2" sx={{ color: theme.palette.secondary[500], display: 'block' }}>
          Kalkulatrix
        </Typography>
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Treten Sie mit uns in Kontakt, um mehr über unsere Enterprise-Partnerschaften zu erfahren. Wir freuen uns darauf, von Ihnen zu
        hören.
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Wir bieten individuelle Lösungen für Ihr Unternehmen an. Kontaktieren Sie uns gerne über das folgende Formular.
      </Typography>
      <Box
        as="iframe"
        src="https://adel-consulting.com/kontakt-kalkulatrix/"
        width="100%"
        height={{ xs: 1320, xl: 860 }}
        sx={{
          border: 0,
          borderRadius: theme.shape.borderRadiusBox,
          overflow: 'hidden',
          width: '100%',
          mt: { xs: 0, sm: 2, md: 4, lg: 6 }
        }}
        title="Kontakt zu Kalulatrix aufnehmen"
      />
    </Box>
  );
};

export default EnterpriseContact;
