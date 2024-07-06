import { Typography, Stack, Grid, Button, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PriceCard = ({ price, bullets, feature, featured }) => {
  const theme = useTheme();
  const bulletsRendered = bullets.map((bullet) => (
    <li key={bullet} style={{ marginBottom: 4 }}>
      {bullet}
    </li>
  ));
  console.log('theme.palette.warning', theme.palette.warning);
  return (
    <Button
      component={Stack}
      color="secondary"
      sx={{
        width: '100%',
        flexDirection: 'column',
        maxWidth: { xs: 500, md: 'none' },
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.customShadows.z1,
        padding: theme.shape.paddingBoxMedium,
        borderRadius: theme.shape.borderRadiusBox,
        height: '100%',
        border: featured ? `2px solid ${theme.palette.primary[500]}` : '2px solid transparent',
        color: theme.palette.text.primary,
        textAlign: 'left',
        alignItems: 'stretch',
        ':hover': {
          borderColor: featured ? theme.palette.primary[500] : theme.palette.grey[500]
        }
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" sx={{ fontSize: { xs: 16, lg: 18 } }}>
          {feature}
        </Typography>
        {featured ? (
          <Stack
            sx={{
              borderRadius: '1000px',
              px: 2,
              py: 0.25,
              backgroundColor: theme.palette.warning.main + '44',
              color: theme.palette.warning.dark,
              my: -2
            }}
          >
            Bestseller
          </Stack>
        ) : (
          ''
        )}
      </Stack>
      <Typography>
        <Typography variant="span" fontSize={{ xs: 26, md: 32, lg: 42 }} fontWeight="bold">
          {price}
        </Typography>
        <Typography variant="span" sx={{ opacity: 0.7 }}>
          /Monat
        </Typography>
      </Typography>
      <Stack sx={{ mb: { xs: 2, md: 4, lg: 6 } }}>
        <ul style={{ paddingLeft: theme.spacing(2) }}>{bulletsRendered}</ul>
      </Stack>
      <Button component="span" variant={featured ? 'contained' : 'outlined'} sx={{ mt: 'auto' }} tabIndex="-1" role={'none'}>
        Jetzt starten!
      </Button>
    </Button>
  );
};

const PricesCards = ({ pricesConfig = pricesConfigPreset }) => {
  return (
    <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} rowSpacing={{ xs: 2, sm: 3, md: 4 }} sx={{ px: { xl: 10 } }}>
      {pricesConfig.map((priceConfig) => (
        <Grid key={priceConfig.title} item xs={12} sm={6} lg={4}>
          <PriceCard
            key={priceConfig.price}
            feature={priceConfig.title}
            price={priceConfig.price}
            bullets={priceConfig.bullets}
            featured={priceConfig.featured}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const pricesConfigPreset = [
  {
    title: 'Premium',
    price: '40€',
    bullets: ['Unbegrenzte Kalkulationen', '1-User Zugang', 'Kundensupport']
  },
  {
    title: 'Pro',
    price: '150€',
    featured: true,
    bullets: [
      'Unbegrenzte Kalkulationen',
      'Kundensupport',
      'Multi-User Zugang',
      'Priorisierter Kunden-Support per Telefon und E-Mail',
      'Monatliches Beratungsgespräch'
    ]
  },
  {
    title: 'Enterprise (auf Anfrage)',
    price: '150€+',
    bullets: [
      'Unbegrenzte Nutzerzahl',
      'Regelmäßige Schulungen und Webinare',
      'Alle Funktionen des Pro-Plans',
      'Persönlicher Account-Manager',
      'Durchführung der Kalkulation vor Ort'
    ]
  }
];

export default PricesCards;
