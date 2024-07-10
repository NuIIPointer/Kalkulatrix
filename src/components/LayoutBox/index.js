import { Box } from '../../../node_modules/@mui/material/index';
import { useTheme } from '@mui/material/styles';

// eslint-disable-next-line react/prop-types
const LayoutBox = ({ children, sx, ...otherProps }) => {
  const theme = useTheme();

  return (
    <Box sx={{ ...sx, borderRadius: theme.shape.borderRadiusBox, boxShadow: theme.customShadows.z0 }} {...otherProps}>
      {children}
    </Box>
  );
};

export default LayoutBox;
