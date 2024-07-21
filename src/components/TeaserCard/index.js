import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TeaserCard = ({ children, sx = {} }) => {
  const theme = useTheme();
  const outerBoxStyle = {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadiusBox,
    boxShadow: theme.customShadows.z1,
    padding: theme.spacing(2),
    ...sx
  };

  return <Box sx={outerBoxStyle}>{children}</Box>;
};

export default TeaserCard;
