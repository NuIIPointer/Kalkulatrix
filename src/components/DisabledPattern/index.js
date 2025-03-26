import React from 'react';
import { Box } from '@mui/material/index';

const DisabledPattern = (props) => {
  return (
    <Box as="svg" xmlns="http://www.w3.org/2000/svg" {...props}>
      <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="96" height="96">
        <path
          d="M-24,24 l48,-48
           M0,96 l96,-96
           M72,120 l48,-48"
          style={{
            stroke: 'rgba(0, 0, 0, 0.06)', // Color of the lines
            strokeWidth: '36' // Doubled stroke width
          }}
        ></path>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalHatch)"></rect>
    </Box>
  );
};

export default DisabledPattern;
