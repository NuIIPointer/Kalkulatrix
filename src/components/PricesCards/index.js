import { Typography, Stack, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StripeContext } from 'context/stripe/index';
import { UserContext } from 'context/user/index';
import { useContext, useState } from 'react';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const PriceCard = ({ price, stripePriceId, bullets, feature, featured, customLink, customLinkText }) => {
  const navigate = useNavigate();
  const [isLoadingCardAction, setIsLoadingCardAction] = useState();
  const { getPortalUrl, createSubscription, activeSubscriptions } = useContext(StripeContext);
  const isActive = activeSubscriptions?.some((sub) => sub.priceId === stripePriceId);

  const onStripeSub = async () => {
    setIsLoadingCardAction(true);
    const checkoutUrl = await createSubscription(stripePriceId);
    window.open(checkoutUrl, '_blank', 'noreferrer');
    setIsLoadingCardAction(false);
  };
  const onPortalClick = async () => {
    setIsLoadingCardAction(true);
    const portalUrl = await getPortalUrl();
    window.open(portalUrl, '_blank', 'noreferrer');
    setIsLoadingCardAction(false);
  };
  const onLoggedOutClick = () => {
    navigate(`/login`);
  };

  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;
  const theme = useTheme();
  const bulletsRendered = bullets.map((bullet) => (
    <li key={bullet} style={{ marginBottom: 4 }}>
      {bullet}
    </li>
  ));

  const onCardClick = () => {
    if (isLoadingCardAction) return;

    if (customLink) {
      navigate(customLink);
    } else if (!isLoggedIn) {
      onLoggedOutClick();
    } else if (isActive) {
      onPortalClick();
    } else {
      onStripeSub();
    }
  };

  return (
    <Button
      component={Stack}
      tabIndex={-1}
      color="secondary"
      onClick={onCardClick}
      sx={{
        width: '100%',
        flexDirection: 'column',
        maxWidth: { xs: 500, md: 'none' },
        backgroundColor: isActive ? theme.palette.primary[500] : theme.palette.common.white,
        boxShadow: theme.customShadows.z1,
        padding: theme.shape.paddingBoxMedium,
        borderRadius: theme.shape.borderRadiusBox,
        height: '100%',
        border: featured ? `2px solid ${theme.palette.primary[500]}` : '2px solid transparent',
        color: isActive ? theme.palette.common.white : theme.palette.text.primary,
        textAlign: 'left',
        alignItems: 'stretch',
        transition: '.25s',
        ':hover': {
          borderColor: featured ? theme.palette.primary[500] : theme.palette.grey[500],
          backgroundColor: isActive ? theme.palette.primary[400] : theme.palette.grey[100],
          cursor: 'pointer',
          boxShadow: theme.customShadows.z3
        }
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" sx={{ fontSize: { xs: 16, lg: 18 } }}>
          {feature} {isActive ? ' (aktiv)' : ''}
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
      <Button
        variant={featured ? 'contained' : 'outlined'}
        color={isActive ? 'white' : undefined}
        sx={{ mt: 'auto' }}
        tabIndex={-1}
        role="presentation"
      >
        {customLinkText || (isActive ? 'Abo verwalten' : 'Jetzt starten!')}
      </Button>
    </Button>
  );
};

const PricesCards = ({ pricesConfig = pricesConfigPreset, containerProps }) => {
  return (
    <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} rowSpacing={{ xs: 2, sm: 3, md: 4 }} {...containerProps}>
      {pricesConfig.map((priceConfig) => (
        <Grid key={priceConfig.title} item xs={12} sm={6} lg={4}>
          <PriceCard
            key={priceConfig.price}
            feature={priceConfig.title}
            price={priceConfig.price}
            stripePriceId={priceConfig.stripePriceId}
            bullets={priceConfig.bullets}
            featured={priceConfig.featured}
            customLink={priceConfig.customLink}
            customLinkText={priceConfig.customLinkText}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const pricesConfigPreset = [
  // {
  //   title: 'FREE',
  //   price: '0€',
  //   stripePriceId: 'price_1QZBBaFGa3DH0yAqy766ghH0',
  //   bullets: ['Das ist ein Test']
  // },
  {
    title: 'Pro',
    price: '69€',
    stripePriceId: 'price_1QUSccFGa3DH0yAqeNCcleFW',
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
    title: 'Premium',
    price: '299€',
    stripePriceId: 'price_1QUSazFGa3DH0yAqzUU4v4U9',
    bullets: ['Unbegrenzte Kalkulationen', '1-User Zugang', 'Kundensupport']
  },
  {
    title: 'Enterprise (auf Anfrage)',
    price: '300€+',
    customLink: '/kontakt',
    customLinkText: 'Kontaktieren Sie uns',
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
