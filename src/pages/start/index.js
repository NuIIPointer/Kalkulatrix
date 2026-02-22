import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Scrollama, Step } from 'react-scrollama';
import SectionHeadlineText from './SectionHeadlineText';
import SectionVorteile from './SectionVorteile';
// import SectionPartnerSlider from './SectionPartnerSlider';
import SectionCalendar from './SectionCalendar';
import SectionGewinn from './SectionGewinn';
import SectionKalkulieren from './SectionKalkulieren';
import SectionCheckline from './SectionCheckline';
import SectionAdel from './SectionAdel';
import SectionPreise from './SectionPreise';
// AUFBEWAHRT: Webinar-Anmeldung – wieder aktivieren wenn die Aktion startet
// import SectionAnmeldung from './SectionAnmeldung';
// import SectionHeadlineCards from './SectionHeadlineCards';
// import SectionTimeline from './SectionTimeline';
// import SectionTextImage from './SectionTextImage';
// import SectionImageText from './SectionImageText';

const Start = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  // const theme = useTheme();

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const sections = [
    { Component: SectionHeadlineText },
    { Component: SectionVorteile },
    // { Component: SectionPartnerSlider },
    { Component: SectionGewinn },
    { Component: SectionKalkulieren },
    { Component: SectionCheckline, fullWidth: true },
    // { Component: SectionAnmeldung }, // AUFBEWAHRT: Webinar-Anmeldung
    { Component: SectionAdel },
    { Component: SectionPreise },
    { Component: SectionCalendar }
  ];

  // const sectionGradients = [
  //   null,                            // SectionHeadlineText — hero
  //   theme.gradient('blueMesh'),      // SectionVorteile — feature cards
  //   null,                            // SectionGewinn — screenshot
  //   theme.gradient('warmNeutral'),   // SectionKalkulieren
  //   null,                            // SectionCheckline
  //   theme.gradient('warmNeutral'),   // SectionAdel
  //   theme.gradient('deepBlue'),      // SectionPreise — pricing
  //   null                             // SectionCalendar
  // ];

  return (
    <Box>
      <Scrollama onStepEnter={onStepEnter} offset={0.3}>
        {sections.map(({ Component, fullWidth }, index) => (
          <Step data={index} key={index}>
            <Box
              sx={{
                mb: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
                ...(!fullWidth && { maxWidth: 1800, mx: 'auto' })
              }}
            >
              <Component isActive={currentStepIndex === index} />
            </Box>
          </Step>
        ))}
      </Scrollama>
    </Box>
  );
};

export default Start;
