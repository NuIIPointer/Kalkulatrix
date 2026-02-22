import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TeaserCard = ({ children, sx = {} }) => {
  const theme = useTheme();
  const outerBoxStyle = {
    ...theme.glass({ intensity: 'medium' }),
    borderRadius: theme.shape.borderRadiusBox,
    boxShadow: theme.customShadows.card,
    padding: theme.spacing(2),
    ...sx
  };

  return <Box sx={outerBoxStyle}>{children}</Box>;
};

export default TeaserCard;
