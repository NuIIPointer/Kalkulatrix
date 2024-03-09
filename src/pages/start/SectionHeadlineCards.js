import React, { useCallback } from 'react';
import { useInView, animated } from '@react-spring/web';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TextTeaserCard from 'components/TextTeaserCard/index';

export default function SectionHeadlineCards() {
  const theme = useTheme();
  const [ref, springs] = useInView(
    () => ({
      from: {
        scale: 0.95
      },
      to: {
        scale: 1
      },
      config: {
        mass: 5,
        friction: 50,
        tension: 50
      }
    }),
    {
      rootMargin: '-40% 0%'
    }
  );

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }} sx={{ paddingX: { xs: theme.spacing(4), md: 0 } }} justifyContent="flex-start">
        <Grid item xs={12} sm={7} md={6} lg={4}>
          <TextTeaserCard
            primaryText="Login"
            prefixText="zum"
            link="/login"
            color={theme.palette.primary.dark}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
        <Grid item xs={12} sm={7} md={6} lg={4}>
          <TextTeaserCard
            primaryText="Demo ansehen"
            prefixText="noch nicht überzeugt?"
            link="/"
            color={theme.palette.secondary.main}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
        <Grid item xs={12} sm={7} md={6} lg={4}>
          <TextTeaserCard
            primaryText="Kontakt aufnehmen"
            prefixText="noch Fragen?"
            link="/"
            color={theme.palette.primary.light}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
      </Grid>
    );
  }, [theme]);

  return (
    <>
      <Grid
        container
        justifyContent={{ xs: 'flex-start', md: 'center' }}
        sx={{ mt: { xs: theme.spacing(4), sm: theme.spacing(10), md: theme.spacing(25) }, paddingX: { xs: theme.spacing(4), md: 0 } }}
      >
        <Grid item xs={12} sm={8}>
          <animated.div ref={ref} style={{ width: '100%', height: '100%', ...springs }}>
            <div>
              <Typography variant="h1" sx={{ mb: 4, textAlign: { xs: 'left', md: 'center' } }}>
                Lorem Ipsum sit amet dolor
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: 16, sm: 20, lg: 22, xl: 24 }, lineHeight: '1.3em', textAlign: { xs: 'left', md: 'center' } }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Typography>
            </div>
          </animated.div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: { xs: theme.spacing(6), sm: theme.spacing(10) }, pb: theme.spacing(20) }}>
        <Grid item xs={12} md={10}>
          {bottomBoxRendering()}
        </Grid>
      </Grid>
    </>
  );
}
