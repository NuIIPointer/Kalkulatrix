import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Scrollama, Step } from 'react-scrollama';
import SectionTextImage from './SectionTextImage';
import SectionImageText from './SectionImageText';
import SectionHeadlineText from './SectionHeadlineText';
import SectionVorteile from './SectionVorteile';
import SectionHeadlineCards from './SectionHeadlineCards';
import SectionTimeline from './SectionTimeline';
import SectionPartnerSlider from './SectionPartnerSlider';

const Start = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const sections = [SectionHeadlineText, SectionVorteile, SectionPartnerSlider, SectionTextImage, SectionTimeline, SectionImageText, SectionHeadlineCards];

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
