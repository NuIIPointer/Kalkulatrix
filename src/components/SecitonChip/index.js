import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const styledColorPreset = {
  primary: {
    backgroundColor: 'primary.100',
    color: 'primary.700'
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
    px: 1.5,
    py: 0.5,
    fontSize: 12
  },
  medium: {
    px: 2.5,
    py: 1,
    fontSize: 14
  },
  large: {
    px: 3,
    py: 1.5,
    fontSize: 16
  }
};

const SectionChip = ({ colorPreset = 'primary', sizePreset = 'medium', shadowPreset = 'none', children, sx }) => {
  const theme = useTheme();

  const dynamicColorPresets = {
    primaryLight: {
      background: `linear-gradient(135deg, rgba(120, 120, 140, 0.08) 0%, rgba(140, 140, 160, 0.14) 40%, rgba(160, 160, 175, 0.10) 70%, rgba(120, 120, 140, 0.06) 100%)`,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: `inset 0 1px 2px 0 rgba(255, 255, 255, 0.35), 0 2px 8px -2px rgba(100, 100, 120, 0.10)`,
      color: theme.palette.grey[600]
    }
  };

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
    button: {
      boxShadow: theme.customShadows.card
    },
    none: {
      boxShadow: 'none'
    }
  };

  const colorStyles = dynamicColorPresets[colorPreset] || styledColorPreset[colorPreset] || {};

  const mergedSx = {
    display: 'inline-block',
    borderRadius: 50,
    fontWeight: 500,
    letterSpacing: '0.02em',
    ...colorStyles,
    ...styledSizePreset[sizePreset],
    ...styledShadowPreset[shadowPreset],
    ...sx
  };

  return (
    <Box sx={mergedSx}>
      <Typography variant="body2" sx={{ fontSize: 'inherit', fontWeight: 'inherit', letterSpacing: 'inherit', color: 'inherit' }}>
        {children}
      </Typography>
    </Box>
  );
};

export default SectionChip;
