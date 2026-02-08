import { Typography, Stack, Grid, Button, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StripeContext } from 'context/stripe/index';
import { UserContext } from 'context/user/index';
import { useContext, useEffect, useState, useMemo, useCallback } from 'react';

const PriceCard = ({
  price,
  viewState,
  priceNotice,
  originalPrice,
  stripePriceId,
  bullets,
  feature,
  featured,
  customLink,
  customLinkText
}) => {
  const { getPortalUrl, createSubscription, activeSubscriptions } = useContext(StripeContext);
  const { user } = useContext(UserContext);
  const [stripeLink, setStripeLink] = useState();
  const [portalUrl, setPortalUrl] = useState();
  const activeSubscription = activeSubscriptions?.find((sub) => sub.priceId === stripePriceId);
  const isActive = !!activeSubscription;

  useEffect(() => {
    const calc = async () => {
      const checkoutUrl = await createSubscription(stripePriceId);
      setStripeLink(checkoutUrl);
    };

    stripePriceId && user.uid && calc();
  }, [activeSubscription, createSubscription, isActive, stripePriceId, user.uid]);

  useEffect(() => {
    const calc = async () => {
      try {
        const portalUrl = await getPortalUrl();
        setPortalUrl(portalUrl);
      } catch (error) {
        console.warn('Portal URL not available:', error.message);
      }
    };

    // Nur Portal-URL laden wenn User eingeloggt UND aktives Abo hat
    if (user.uid && isActive) {
      calc();
    }
  }, [activeSubscription, getPortalUrl, isActive, user.uid]);

  const isLoggedIn = !!user?.uid;
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const theme = useTheme();
  const bulletsRendered = bullets.map((bullet) => (
    <li key={bullet} style={{ marginBottom: 4 }}>
      {bullet}
    </li>
  ));

  // Click-Handler für Subscription-Erstellung
  const handleCardClick = useCallback(
    async (e) => {
      // Wenn customLink vorhanden oder nicht eingeloggt, normales Link-Verhalten
      if (customLink || !user.uid) {
        return;
      }

      // Wenn aktives Abo und Portal-URL vorhanden, normales Link-Verhalten
      if (isActive && portalUrl) {
        return;
      }

      // Wenn stripeLink bereits vorhanden, normales Link-Verhalten
      if (stripeLink) {
        return;
      }

      // Subscription erstellen wenn noch kein Link vorhanden
      if (stripePriceId && !isLoadingCheckout) {
        e.preventDefault();
        setIsLoadingCheckout(true);
        try {
          const checkoutUrl = await createSubscription(stripePriceId);
          if (checkoutUrl) {
            window.open(checkoutUrl, '_blank');
          }
        } catch (error) {
          console.error('Error creating subscription:', error);
        } finally {
          setIsLoadingCheckout(false);
        }
      }
    },
    [customLink, user.uid, isActive, portalUrl, stripeLink, stripePriceId, isLoadingCheckout, createSubscription]
  );

  const cardHref = useMemo(() => {
    if (!user.uid) {
      return '/login';
    } else if (customLink) {
      return customLink;
    } else if (!isLoggedIn) {
      return '/register';
    } else if (isActive) {
      return portalUrl || '#';
    } else {
      // Platzhalter # falls stripeLink noch nicht geladen - onClick übernimmt
      return stripeLink || '#';
    }
  }, [user.uid, customLink, isLoggedIn, isActive, portalUrl, stripeLink]);

  return (
    <Stack
      component={cardHref ? 'a' : 'span'}
      tabIndex={-1}
      color="secondary"
      href={cardHref}
      target={customLink ? '_self' : '_blank'}
      onClick={handleCardClick}
      sx={{
        position: 'relative',
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
        justifyContent: 'flex-start',
        transition: '.25s',
        outline: isActive ? '4px solid gold' : 'none',
        textDecoration: 'none',
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
              backgroundColor: isActive ? theme.palette.common.white : theme.palette.warning.main + '44',
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
          fontSize={priceNotice && !price ? { xs: 22, md: 24, lg: 36 } : { xs: 26, md: 32, lg: 42 }}
          fontWeight="bold"
          lineHeight="1.15em"
          display="inline-flex"
        >
          {price ? `${price}€` : priceNotice}
        </Typography>
        {!priceNotice && (
          <Typography variant="span" sx={{ opacity: 0.7 }}>
            /{viewState === 'monthly' ? 'Monat' : viewState === 'halfYearly' ? 'Halbjahr' : 'Jahr'}
          </Typography>
        )}
      </Typography>
      {originalPrice && (
        <Typography variant="span" sx={{ opacity: 0.7, display: 'flex', gap: 1 }} aria-hidden>
          <Stack
            sx={{
              textDecoration: 'line-through'
            }}
          >
            {originalPrice}€
          </Stack>
          spare {Math.round(((originalPrice - price) / originalPrice) * 100)}%
        </Typography>
      )}
      <Stack sx={{ mb: { xs: 2, md: 2.5, lg: 3 } }}>
        <ul style={{ paddingLeft: theme.spacing(2) }}>{bulletsRendered}</ul>
      </Stack>
      {activeSubscriptions.length === 0 || isActive || customLinkText ? (
        <Button
          variant={featured ? 'contained' : 'outlined'}
          color={isActive ? 'white' : undefined}
          sx={{ mt: 'auto' }}
          tabIndex={-1}
          role="presentation"
          disabled={isLoadingCheckout}
        >
          {customLinkText || (isActive ? 'Abo verwalten' : 'Jetzt starten')}
          {isLoadingCheckout && <CircularProgress color="inherit" size={20} sx={{ marginLeft: theme.spacing(1) }} />}
          {/* {isLoadingCardAction ? (
            <CircularProgress color="inherit" stroke="currentColor" size={20} sx={{ marginLeft: theme.spacing(1) }} />
          ) : (
            ''
          )} */}
        </Button>
      ) : (
        ''
      )}
    </Stack>
  );
};

const PricesCards = ({ pricesConfig = pricesConfigPreset, containerProps }) => {
  const theme = useTheme();
  const viewState = 'monthly';

  return (
    <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} rowSpacing={{ xs: 2, sm: 3, md: 4 }} {...containerProps}>
      {/* <Grid item xs={12}>
        <Stack sx={{ display: 'flex', alignItems: { xs: 'start', sm: 'center' }, marginBottom: 2 }}>
          <Typography
            variant="body2"
            sx={{
              padding: 1.5,
              backgroundColor: theme.palette.grey[100],
              borderRadius: theme.shape.borderRadiusBox,
              color: theme.palette.grey[700],
              fontWeight: 500
            }}
          >
            Mindestbindung: 12 Monate
          </Typography>
        </Stack>
      </Grid> */}
      {pricesConfig.map((priceConfig) => (
        <Grid key={priceConfig.title} item xs={12} sm={6} lg={4}>
          <PriceCard
            key={priceConfig.prices?.[viewState].stripePriceId || priceConfig.priceNotice}
            feature={priceConfig.title}
            viewState={viewState}
            price={priceConfig.prices?.[viewState].price}
            originalPrice={null}
            priceNotice={priceConfig.priceNotice}
            stripePriceId={priceConfig.prices?.[viewState].stripePriceId}
            bullets={priceConfig.bullets}
            featured={priceConfig.prices?.[viewState].featured}
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
    title: 'Reine Toolnutzung',
    prices: {
      monthly: {
        price: 29.95,
        stripePriceId: 'price_1QNB5JFGa3DH0yAqcJCNddLm'
      }
    },
    bullets: [
      'Stundensatzkalkulation',
      'Mitarbeiterkostenplanung',
      'Produktmargenplanung',
      'Erfassung des Plangewinns',
      'Kundensupport',
      '12 Monate Laufzeit'
    ]
  },
  {
    title: 'Tool + Beratung',
    prices: {
      monthly: {
        price: 119.95,
        stripePriceId: 'price_1QUSazFGa3DH0yAq85zvOhaH',
        featured: true
      }
    },
    bullets: [
      'Monatliches Beratungsgespräch',
      'Regelmäßige Schulungen und Webinare',
      'Alle Funktionen des Toolnutzung-Plans',
      'Priorisierter Kundensupport',
      '12 Monate Laufzeit'
    ]
  },
  {
    title: 'Enterprise',
    priceNotice: 'Preis auf Anfrage',
    customLink: '/enterprise',
    customLinkText: 'Jetzt anfragen',
    bullets: [
      'Unbegrenzte Stundensatzkalkulation',
      'Durchführung der Kalkulation in ihrem Betrieb',
      'Individuelle Handlungsempfehlungen',
      'Für Unternehmens- und Steuerberater',
      'Alle Features des Tool + Beratung Plans',
      'Persönlicher Accountmanager',
      '12 Monate Laufzeit'
    ]
  }
];

export default PricesCards;
