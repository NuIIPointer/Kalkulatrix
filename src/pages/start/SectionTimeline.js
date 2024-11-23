import React from 'react';
import { animated, useInView } from '@react-spring/web';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SectionTimeline = () => {
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

  return (
    <>
      <Grid container justifyContent="center" sx={{ my: { xs: theme.spacing(12), sm: theme.spacing(25) } }}>
        <Grid item xs={8}>
          <animated.div ref={ref} style={{ width: '100%', height: '100%', ...springs }}>
            <div>
              <Typography variant="h1" sx={{ mb: 4 }} align="center">
                Lorem Ipsum sit amet dolor
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: 16, sm: 20, lg: 22, xl: 24 }, lineHeight: '1.3em' }} align="center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Typography>
            </div>
          </animated.div>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionTimeline;
