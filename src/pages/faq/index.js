import { useTheme } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';
import IconChip from 'components/IconChip';

const items = [
  {
    title: 'Was ist Kalkulatrix?',
    description:
      'Kalkulatrix ist ein Online-Tool zur Berechnung von Stundensätzen für Dienstleistungsbetriebe und besonders Handwerker. Es hilft Unternehmen, ihre Kosten genau zu kalkulieren und wirtschaftlich tragfähige Preise festzulegen.'
  },
  {
    title: 'Warum sollte ich meinen Stundensatz berechnen?',
    description:
      'Ein korrekt berechneter Stundensatz stellt sicher, dass alle Kosten gedeckt sind und ein angemessener Gewinn erzielt wird. Viele Unternehmen kalkulieren zu niedrig und arbeiten unrentabel - Kalkulatrix hilft, dies zu vermeiden.'
  },
  {
    title: 'Wie funktioniert die Berechnung?',
    description:
      'Du gibst relevante Daten wie Fixkosten, Personalkosten, Auslastung und Plangewinn ein. Kalkulatrix berechnet daraus automatisch deinen optimalen Stundensatz.'
  },
  {
    title: 'Brauche ich spezielle Vorkenntnisse, um Kalkulatrix zu nutzen?',
    description:
      'Nein, das Tool ist intuitiv aufgebaut und leicht verständlich. Falls du Fragen hast, findest du in der Software Hilfetexte oder kannst unseren Support kontaktieren.'
  },
  {
    title: 'Kann ich meine Berechnungen speichern?',
    description: 'Ja, du kannst deine Berechnungen speichern und später darauf zurückgreifen.'
  },
  {
    title: 'Benötige ich eine Software-Installation?',
    description: 'Nein, Kalkulatrix ist ein webbasiertes Tool und funktioniert direkt im Browser.'
  },
  {
    title: 'Kann ich mein Abo jederzeit kündigen?',
    description: 'Ja, du kannst dein Abonnement jederzeit zum Ende des laufenden Abrechnungszeitraums kündigen.'
  },
  {
    title: 'Wer hat Zugriff auf meine Daten?',
    description:
      'Nur du! Wir verkaufen oder teilen keine Daten mit Dritten. Die eingegebenen Informationen dienen ausschließlich zur Berechnung deines Stundensatzes.'
  }
];

const FAQ = () => {
  const theme = useTheme();
  const itemsRendered = items.map((item, i) => (
    <Stack
      key={i}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
        gap: { xs: 2, md: 3, lg: 4 },
        mb: { xs: 2, sm: 4, md: 6 }
      }}
    >
      <IconChip
        altContent={
          <Typography color="primary" fontWeight="900" fontSize={{ xs: 18, sm: 20, md: 24, lg: 26, xl: 32 }}>
            {i + 1}
          </Typography>
        }
        colorPreset="primaryLight"
        sizePreset="medium"
        cardSx={{ flexShrink: 0 }}
        shadowPreset="small"
      />
      <Stack mt={1.5}>
        <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0, fontWeight: 600 }}>
          {item.description}
        </Typography>
      </Stack>
    </Stack>
  ));

  return (
    <Box
      sx={{
        px: 4,
        py: { xs: theme.spacing(4), sm: theme.spacing(10), md: theme.spacing(16), lg: theme.spacing(20) },
        maxWidth: 1000,
        mx: 'auto',
        display: 'block'
      }}
    >
      <Typography variant="h1" sx={{ mb: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(10) }, textAlign: 'center' }}>
        FAQ
        <Typography component="span" variant="h2" sx={{ color: theme.palette.secondary[500], display: 'block' }}>
          Kalkulatrix
        </Typography>
      </Typography>
      {itemsRendered}
      {/* <Box
        sx={{
          width: '100%',
          height: { xs: 1320, xl: 860 },
          maxWidth: 1400,
          mx: 'auto',
          display: 'block',
          border: 0,
          borderRadius: theme.shape.borderRadiusBox,
          backgroundColor: theme.palette.background.paper,
          padding: theme.shape.paddingBoxLarge,
          overflow: 'hidden',
          mt: { xs: 0, sm: 2, md: 4, lg: 6 }
        }}
        title="Kontakt zu Kalulatrix Mitarbeitern"
      >
        content
      </Box> */}
    </Box>
  );
};

export default FAQ;
