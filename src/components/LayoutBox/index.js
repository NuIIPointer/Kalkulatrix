import { Box } from '../../../node_modules/@mui/material/index';
import { useTheme } from '@mui/material/styles';

const LayoutBox = ({ children, sx, ...otherProps }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...theme.glass({ intensity: 'medium' }),
        borderRadius: theme.shape.borderRadiusBox,
        boxShadow: theme.customShadows.card,
        ...sx
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default LayoutBox;
