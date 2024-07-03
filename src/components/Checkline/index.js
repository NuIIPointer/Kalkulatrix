import IconChip from 'components/IconChip';
import PropTypes from 'prop-types';
import { Typography, Stack } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const iconSize = 50;

const Checkline = ({ items, textProps, iconProps = {}, breakpointWrap = 'md' }) => {
  const theme = useTheme();
  const iconBorder = iconProps.borderWidth || 3;
  const iconBorderColor = iconProps.borderColor || theme.palette.success[500];
  const itemsRendered = items.map((item, i) => {
    const { title, icon } = item;
    return (
      <Stack
        key={title + i}
        sx={{
          flexDirection: {
            xs: 'row',
            [breakpointWrap]: 'column'
          },
          alignItems: 'center',
          justifyContent: {
            xs: 'flex-start',
            [breakpointWrap]: 'flex-end'
          },
          my: {
            xs: theme.spacing(3),
            [breakpointWrap]: 0
          },
          flexBasis: 0,
          flexGrow: 1,
          zIndex: 1,
          paddingX: {
            xs: 0,
            [breakpointWrap]: theme.spacing(2)
          }
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: {
              xs: 0,
              [breakpointWrap]: theme.spacing(1)
            },
            ml: {
              xs: theme.spacing(2),
              [breakpointWrap]: 0
            },
            fontWeight: 600,
            textAlign: {
              xs: 'left',
              [breakpointWrap]: 'center'
            },
            ...textProps,
            order: {
              xs: 1,
              [breakpointWrap]: 0
            }
          }}
        >
          {title}
        </Typography>
        <IconChip
          icon={icon || Check}
          colorPreset="primaryLight"
          sizePreset="medium"
          iconSx={{
            color: iconProps.color || theme.palette.success[500],
            ...iconProps.iconSx
          }}
          cardSx={{
            flexShrink: 0,
            borderRadius: '10000px',
            width: iconSize,
            height: iconSize,
            backgroundColor: iconProps.backgroundColor || theme.palette.success[50],
            borderWidth: iconBorder,
            borderColor: iconBorderColor,
            borderStyle: iconProps.borderStyle || 'solid',
            ...iconProps.cardSx
          }}
          shadowPreset="small"
        />
      </Stack>
    );
  });

  return (
    <Stack
      justifyContent="space-between"
      flexDirection={{
        xs: 'column',
        [breakpointWrap]: 'row'
      }}
      position="relative"
      width="100%"
    >
      <Stack flexGrow={1 / (items.length - 1)} />
      {itemsRendered}
      <Stack flexGrow={1 / (items.length - 1)} />
      <Stack
        sx={{
          height: {
            xs: '100%',
            [breakpointWrap]: iconBorder
          },
          position: 'absolute',
          bottom: {
            xs: 0,
            [breakpointWrap]: iconSize / 2
          },
          left: {
            xs: iconSize / 2,
            [breakpointWrap]: '50%'
          },
          transform: 'translateX(-50%)',
          width: {
            xs: iconBorder,
            [breakpointWrap]: '100%'
          },
          backgroundColor: iconBorderColor,
          zIndex: 0
        }}
      />
    </Stack>
  );
};

Checkline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.elementType
    })
  ),
  textProps: PropTypes.object,
  iconProps: PropTypes.object
};

export default Checkline;
