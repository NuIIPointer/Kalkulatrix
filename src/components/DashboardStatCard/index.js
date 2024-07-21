import { Stack, Typography, useTheme } from '@mui/material';
import TeaserCard from 'components/TeaserCard/index';

// eslint-disable-next-line react/prop-types
const TextTeaserCard = ({ primaryText, prefixText, children, light, textAlign }) => {
  const theme = useTheme();
  const textColor = light ? theme.palette.text.primary : theme.palette.common.white;

  return (
    <TeaserCard color={theme.palette.primary.dark} boxShadow={theme.customShadows.z1}>
      <Stack direction="column" textAlign={textAlign || 'left'} spacing={{ xs: 0, md: 1 }} sx={{ width: '100%' }}>
        {/* <Icon sx={{ fontSize: { xs: 32, md: 32, lg: 40 }, color: textColor }} /> */}
        {prefixText && (
          <Typography
            paragraph
            sx={{
              fontSize: { xs: 18, md: 22, lg: 24 },
              lineHeight: '1em',
              textTransform: 'none',
              fontWeight: theme.typography.fontWeightBolder,
              margin: '0px',
              color: textColor
            }}
          >
            {prefixText}
          </Typography>
        )}
        <Typography
          paragraph
          sx={{
            fontSize: { xs: 20, sm: 28, md: 34, lg: 38 },
            lineHeight: '1em',
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightLight,
            margin: '0px',
            color: textColor,
            textAlign: textAlign
          }}
        >
          {primaryText}
        </Typography>
        {children}
      </Stack>
    </TeaserCard>
  );
};

export default TextTeaserCard;
