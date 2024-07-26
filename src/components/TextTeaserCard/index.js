import { Button, Stack, Typography, useTheme, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TextTeaserCard = ({ primaryText, prefixText, link, color, children, light, grow, ratio, textAlign, onClick, boxShadow }) => {
  const theme = useTheme();
  const textColor = light ? theme.palette.text.primary : theme.palette.common.white;
  const textColorHover = theme.palette.getContrastText(color);
  const bgColor = color;

  const OuterComponent = link || onClick ? Button : Box;

  return (
    <OuterComponent
      component={link && Link}
      to={link && link}
      onClick={onClick && onClick}
      sx={{
        boxShadow: boxShadow || theme.customShadows.z1,
        aspectRatio: ratio,
        width: '100%',
        height: grow && '100%',
        flexGrow: grow && '1',
        background: bgColor,
        color: textColor,
        padding: {
          xs: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
          sm: `${theme.spacing(3)} ${theme.spacing(4)}`,
          md: `${theme.spacing(4)} ${theme.spacing(5)}`
        },
        borderRadius: {
          xs: theme.shape.borderRadiusBox * 0.5,
          sm: theme.shape.borderRadiusBox
        },
        transition: '.25s',
        justifyContent: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        '&:after': link && {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '0',
          height: '1000%',
          width: '75%',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.25) 80%, rgba(255,255,255,0.3) 100%)',
          transform: 'rotate(20deg) translateY(-50%) translateX(-120%)',
          transformOrigin: 'top right',
          transition: '.25s',
          opacity: '.25',
          pointerEvents: 'none'
        },
        '&:hover': {
          color: textColorHover,
          boxShadow: theme.customShadows.z2,

          '&:after': link && {
            transform: 'rotate(20deg) translateY(-50%) translateX(-15%)'
          }
        }
      }}
    >
      <Stack direction="column" textAlign={textAlign || 'left'} spacing={{ xs: 0, md: 1 }} sx={{ width: '100%', color: 'inherit' }}>
        {/* <Icon sx={{ fontSize: { xs: 32, md: 32, lg: 40 }, color: textColor }} /> */}
        {prefixText && (
          <Typography
            paragraph
            sx={{
              fontSize: { sx: 14, sm: 18, md: 22, lg: 24 },
              lineHeight: '1em',
              textTransform: 'none',
              fontWeight: theme.typography.fontWeightBolder,
              margin: '0px',
              color: 'inherit'
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
            color: 'inherit',
            textAlign: textAlign
          }}
        >
          {primaryText}
        </Typography>
        {children}
      </Stack>
    </OuterComponent>
  );
};

export default TextTeaserCard;
