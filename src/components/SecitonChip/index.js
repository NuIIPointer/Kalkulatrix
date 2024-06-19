import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const styledColorPreset = {
  primary: {
    backgroundColor: 'primary.100',
    color: 'primary.700'
  },
  primaryLight: {
    backgroundColor: 'common.white',
    color: 'primary.300'
  },
  secondary: {
    backgroundColor: 'secondary.100',
    color: 'secondary.700'
  },
  error: {
    backgroundColor: 'error.light',
    color: 'error.main'
  },
  warning: {
    backgroundColor: 'warning.light',
    color: 'warning.main'
  },
  info: {
    backgroundColor: 'info.light',
    color: 'info.main'
  },
  success: {
    backgroundColor: 'success.light',
    color: 'success.main'
  }
};

const styledSizePreset = {
  small: {
    px: 1,
    py: 0.5,
    fontSize: 12,
    borderRadius: 0.5
  },
  medium: {
    px: 2,
    py: 1.25,
    fontSize: 16,
    borderRadius: 1
  },
  large: {
    px: 3,
    py: 2,
    fontSize: 20,
    borderRadius: 1.5
  }
};

const SectionChip = ({ colorPreset = 'primary', sizePreset = 'medium', shadowPreset = 'none', children, sx }) => {
  const theme = useTheme();

  const styledShadowPreset = {
    small: {
      boxShadow: theme.shadows[3]
    },
    medium: {
      boxShadow: theme.shadows[8]
    },
    large: {
      boxShadow: theme.shadows[12]
    },
    none: {
      boxShadow: 'none'
    }
  };

  const mergedStyles = {
    ...styledColorPreset[colorPreset],
    ...styledSizePreset[sizePreset],
    ...styledShadowPreset[shadowPreset],
    ...sx
  };

  return <Box {...mergedStyles}>{children}</Box>;
};

export default SectionChip;
