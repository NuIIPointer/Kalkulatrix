import { Typography, Stack, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StripeContext } from 'context/stripe/index';
import { UserContext } from 'context/user/index';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PriceCard = ({ price, smallPrice, stripePriceId, bullets, feature, featured, customLink, customLinkText }) => {
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
  console.log('user', user);
  const isLoggedIn = !!user?.uid;
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

  console.log('isLoggedIn', isLoggedIn);

  return (
    <Button
      component={Stack}
      tabIndex={-1}
      color="secondary"
      onClick={onCardClick}
      type="button"
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
        <Typography
          variant="span"
          fontSize={smallPrice ? { xs: 22, md: 24, lg: 36 } : { xs: 26, md: 32, lg: 42 }}
          fontWeight="bold"
          lineHeight="1.15em"
        >
          {price}
        </Typography>
        {!smallPrice && (
          <Typography variant="span" sx={{ opacity: 0.7 }}>
            /Monat
          </Typography>
        )}
      </Typography>
      <Stack sx={{ mb: { xs: 2, md: 2.5, lg: 3 } }}>
        <ul style={{ paddingLeft: theme.spacing(2) }}>{bulletsRendered}</ul>
      </Stack>
      <Button
        variant={featured ? 'contained' : 'outlined'}
        color={isActive ? 'white' : undefined}
        sx={{ mt: 'auto' }}
        tabIndex={-1}
        role="presentation"
      >
        {customLinkText || (isActive ? 'Abo verwalten' : 'Jetzt starten')}{' '}
        {isLoadingCardAction ? (
          <CircularProgress color="inherit" stroke="currentColor" size={20} sx={{ marginLeft: theme.spacing(1) }} />
        ) : (
          ''
        )}
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
            smallPrice={priceConfig.smallPrice}
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
  {
    title: 'Pro',
    price: '69€',
    stripePriceId: 'price_1QUSccFGa3DH0yAqeNCcleFW',
    featured: true,
    bullets: [
      'Unbegrenzte Stundensatzkalkulation',
      'Mitarbeiterkostenplanung',
      'Produktmargenplanung',
      'Erfassung des Plangewinns',
      'Kundensupport'
    ],
    priceIds: {
      monthly: 'asd',
      halfYearly: 'asd',
      yearly: 'asd'
    }
  },
  {
    title: 'Premium',
    price: '299€',
    stripePriceId: 'price_1QUSazFGa3DH0yAqzUU4v4U9',
    bullets: [
      'Monatliches Beratungsgespräch',
      'Exklusive Vorlagen & Checklisten',
      'Regelmäßige Schulungen und Webinare',
      'Alle Funktionen des Pro Plan',
      'Priorisierter Kundensupport'
    ],
    priceIds: {
      monthly: 'asd',
      halfYearly: 'asd',
      yearly: 'asd'
    }
  },
  {
    title: 'Enterprise',
    price: 'Preis auf Anfrage',
    smallPrice: true,
    customLink: '/kontakt',
    customLinkText: 'Jetzt anfragen',
    bullets: [
      'Durchführung der Kalkulation in ihrem Betrieb',
      'Individuelle Handlungsempfehlungen',
      'Für Unternehmens- und Steuerberater',
      'Alle Features des Premiumplan',
      'Persönlicher Accountmanager'
    ],
    priceIds: {
      monthly: 'asd',
      halfYearly: 'asd',
      yearly: 'asd'
    }
  }
];

export default PricesCards;
