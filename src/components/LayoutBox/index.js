import { Box } from '../../../node_modules/@mui/material/index';
import { useTheme } from '@mui/material/styles';

// eslint-disable-next-line react/prop-types
const LayoutBox = ({ children, sx, ...otherProps }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...sx,
        borderRadius: sx.borderRadius || theme.shape.borderRadiusBox,
        boxShadow: sx.boxShadow || theme.customShadows.z0,
        border: '1px solid #00000012'
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default LayoutBox;
