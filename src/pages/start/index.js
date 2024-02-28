import React, { useCallback, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard/index';
import Logo from 'components/Logo/Logo';
import { Scrollama, Step } from 'react-scrollama';
import AnimatedSection from 'components/AnimatedSection/index';
import SectionSecond from './SectionSecond';
import SectionFirst from './SectionFirst';

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
          {/* <Step data={2}>
            <div>
              <SectionSecond isActive={currentStepIndex === 2} />
            </div>
          </Step>
          <Step data={3}>
            <div>
              <SectionSecond isActive={currentStepIndex === 3} />
            </div>
          </Step> */}
          <Step data={4}>
            <div>
              <AnimatedSection
                reverse
                isActive={currentStepIndex === 4}
                firstContent={
                  <>
                    <h2>Ermitteln Sie den perfekten Stundensatz für Ihr Unternehmen</h2>
                    <p>Mit Kalkulatrix beseitigen Sie Unsicherheiten bei der Preisfindung.</p>
                  </>
                }
                imageContent={<img src="https://placehold.co/600x400/EEE/31343C" alt="Platzhalterbild" />}
              ></AnimatedSection>
            </div>
          </Step>
          {/* Weitere Steps mit Animationen hier */}
        </Scrollama>
        {bottomBoxRendering()}
      </Box>
    </>
  );
};

export default Start;
