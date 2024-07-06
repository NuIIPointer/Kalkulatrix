import Slider from 'react-slick';
import { Box, useMediaQuery } from '@mui/material';
import React from 'react';

const logoSrcs = [
  'https://placehold.co/150x50',
  'https://placehold.co/200x75',
  'https://placehold.co/250x100',
  'https://placehold.co/300x125',
  'https://placehold.co/350x150',
  'https://placehold.co/400x175',
  'https://placehold.co/450x200',
  'https://placehold.co/500x225',
  'https://placehold.co/550x250'
];

const SectionPartnerSlider = () => {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: isMdUp ? 5 : 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  };

  const slides = logoSrcs.map((logoSrc, index) => (
    <Box
      key={index}
      sx={{
        px: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        '& img': {
          width: 'auto',
          height: '100%'
        }
      }}
    >
      <img src={logoSrc} alt={`Logo ${index + 1}`} />
    </Box>
  ));

  return <Slider {...settings}>{slides}</Slider>;
};

export default SectionPartnerSlider;
