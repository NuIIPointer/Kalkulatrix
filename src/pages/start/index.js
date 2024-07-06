import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Scrollama, Step } from 'react-scrollama';
import SectionHeadlineText from './SectionHeadlineText';
import SectionVorteile from './SectionVorteile';
import SectionPartnerSlider from './SectionPartnerSlider';
import SectionCalendar from './SectionCalendar';
import SectionGewinn from './SectionGewinn';
import SectionKalkulieren from './SectionKalkulieren';
import SectionCheckline from './SectionCheckline';
import SectionAdel from './SectionAdel';
import SectionPreise from './SectionPreise';
// import SectionHeadlineCards from './SectionHeadlineCards';
// import SectionTimeline from './SectionTimeline';
// import SectionTextImage from './SectionTextImage';
// import SectionImageText from './SectionImageText';

const Start = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const sections = [
    SectionHeadlineText,
    SectionVorteile,
    SectionPartnerSlider,
    SectionGewinn,
    SectionKalkulieren,
    SectionCheckline,
    SectionAdel,
    SectionPreise,
    SectionCalendar
  ];

  return (
    <>
      <Box>
        <Scrollama onStepEnter={onStepEnter} offset={0.3}>
          {sections.map((Section, index) => (
            <Step data={index} key={index}>
              <div>
                <Section isActive={currentStepIndex === index} />
              </div>
            </Step>
          ))}
        </Scrollama>
      </Box>
    </>
  );
};

export default Start;
