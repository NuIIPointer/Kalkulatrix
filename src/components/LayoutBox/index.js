import { Box } from '../../../node_modules/@mui/material/index';
import { useTheme } from '@mui/material/styles';

const LayoutBox = ({ children, sx, ...otherProps }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: theme.shape.borderRadiusBox,
        boxShadow: theme.customShadows.z0,
        border: '1px solid #00000012',
        ...sx
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default LayoutBox;
