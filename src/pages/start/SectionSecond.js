import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useGesture } from 'react-use-gesture';
import { useInView, animated, useSpring, to } from '@react-spring/web';
import { Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import formScreenshot from '../../assets/images/content/stundensatzformular.jpg';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function SectionSecond() {
  const theme = useTheme();
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100
      },
      to: {
        opacity: 1,
        y: 0
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
    <Grid container justifyContent="space-between">
      <Grid
        item
        md={6}
        sx={{ pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(40) }, py: theme.spacing(30) }}
      >
        <Typography variant="h1" sx={{ mb: 4 }}>
          Lorem Ipsum sit amet dolor
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { xs: 16, sm: 20, lg: 24, xl: 28 } }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            borderTopLeftRadius: theme.spacing(theme.shape.borderRadiusBox * 3),
            borderBottomLeftRadius: theme.spacing(theme.shape.borderRadiusBox * 3),
            '&:before': {
              content: '""',
              position: 'absolute',
              opacity: '0.5',
              zIndex: '1',
              height: '100%',
              width: '100%',
              background: `linear-gradient(45deg, ${theme.palette.primary[500]}, ${theme.palette.primary[800]}4a)`,
              pointerEvents: 'none'
            }
          }}
        >
          <animated.div ref={ref} style={{ width: '100%', height: '100%', ...springs }}>
            <img
              src={formScreenshot}
              style={{
                position: 'absolute',
                height: '120%',
                width: '100%',
                objectFit: 'cover',
                transform: 'skewY(13deg)',
                objectPosition: 'left top'
              }}
              alt=""
            />
          </animated.div>
        </Box>
      </Grid>
    </Grid>
  );
}
