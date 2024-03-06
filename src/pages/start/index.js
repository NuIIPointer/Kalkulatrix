import React, { useCallback, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard/index';
import { Scrollama, Step } from 'react-scrollama';
import SectionSecond from './SectionSecond';
import SectionThird from './SectionThird';
import SectionFirst from './SectionFirst';
import SectionFourth from './SectionFourth';

const Start = () => {
  const theme = useTheme();
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    // Hier können Sie Aktionen ausführen, wenn ein Schritt betreten wird, z.B. das Ändern von Texten oder Bildern
  };

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard
            primaryText="Login"
            prefixText="zum"
            link="/login"
            color={theme.palette.primary.dark}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard
            primaryText="Demo ansehen"
            prefixText="noch nicht überzeugt?"
            link="/"
            color={theme.palette.secondary.main}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
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
      <Box>
        <SectionFirst isActive={currentStepIndex === 1} />
        <Scrollama onStepEnter={onStepEnter} offset={0.30}>
          <Step data={1}>
            <div>
              <SectionSecond isActive={currentStepIndex === 1} />
            </div>
          </Step>
          <Step data={2}>
            <div>
              <SectionThird isActive={currentStepIndex === 2} />
            </div>
          </Step>
          <Step data={3}>
            <div>
              <SectionFourth isActive={currentStepIndex === 3} />
            </div>
          </Step>
          {/* Weitere Steps mit Animationen hier */}
        </Scrollama>
        <Grid container justifyContent="center" sx={{ mt: theme.spacing(10), pb: theme.spacing(20) }}>
          <Grid item xs={12} md={10}>
            {bottomBoxRendering()}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Start;
