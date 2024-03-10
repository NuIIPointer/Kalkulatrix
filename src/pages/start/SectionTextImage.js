import React from 'react';
import { useInView, animated } from '@react-spring/web';
import { Grid, Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import formScreenshot from '../../assets/images/content/stundensatzformular.jpg';

export default function SectionTextImage() {
  const theme = useTheme();

  const textStyles = { fontSize: { xs: 16, sm: 20, lg: 22, xl: 24 }, lineHeight: '1.3em' };

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
    <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          pl: { xs: theme.spacing(4), md: theme.spacing(10), lg: theme.spacing(20), xl: theme.spacing(30) },
          pr: { xs: theme.spacing(4), md: 0 },
          py: { xs: theme.spacing(2), md: theme.spacing(20), lg: theme.spacing(25) }
        }}
      >
        <Typography variant="h1" sx={{ mb: 4 }}>
          Lorem Ipsum sit amet dolor
        </Typography>
        <Typography variant="body2" sx={textStyles}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </Typography>
        <List sx={{ mt: 2 }}>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <ChevronRight />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={textStyles}
              primary="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <ChevronRight />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={textStyles}
              primary="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <ChevronRight />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={textStyles}
              primary="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
            />
          </ListItem>
        </List>
        <Button href="/register" color="primary" variant="contained" sx={{ mt: theme.spacing(4), mr: theme.spacing(1) }}>
          Jetzt starten
        </Button>
        <Button href="/kontakt" color="primary" variant="contained" sx={{ mt: theme.spacing(4) }}>
          Beratungstermin vereinbaren
        </Button>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            minHeight: { xs: '500px', sm: '700px', md: 'initial' },
            position: 'relative',
            overflow: 'hidden',
            borderTopLeftRadius: { md: theme.spacing(theme.shape.borderRadiusBox * 2) },
            borderBottomLeftRadius: { md: theme.spacing(theme.shape.borderRadiusBox * 2) },
            mt: { xs: theme.spacing(8), md: 0 },
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
