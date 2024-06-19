import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const styledSizePresets = {
  large: {
    card: {
      borderRadius: 2,
      width: 120,
      height: 120
    },
    icon: {
      fontSize: 48
    }
  },
  medium: {
    card: {
      borderRadius: 1.5,
      width: 72,
      height: 72
    },
    icon: {
      fontSize: 32
    }
  }
};

const styledColorPreset = {
  primary: {
    card: {
      backgroundColor: 'primary.100'
    },
    icon: {
      color: 'primary.700'
    }
  },
  primaryLight: {
    card: {
      backgroundColor: 'common.white'
    },
    icon: {
      color: 'primary.300'
    }
  },
  secondary: {
    card: {
      backgroundColor: 'secondary.100'
    },
    icon: {
      color: 'secondary.700'
    }
  },
  error: {
    card: {
      backgroundColor: 'error.light'
    },
    icon: {
      color: 'error.main'
    }
  },
  warning: {
    card: {
      backgroundColor: 'warning.light'
    },
    icon: {
      color: 'warning.main'
    }
  },
  info: {
    card: {
      backgroundColor: 'info.light'
    },
    icon: {
      color: 'info.main'
    }
  },
  success: {
    card: {
      backgroundColor: 'success.light'
    },
    icon: {
      color: 'success.main'
    }
  }
};

const defaultCardSx = {
  borderRadius: 1,
  backgroundColor: 'primary.100',
  color: 'white',
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const defaultIconSx = {
  fontSize: 20,
  color: 'primary.700'
};

const IconChip = ({ icon, cardSx, iconSx, sizePreset = 'medium', colorPreset = 'primary', shadowPreset = 'none' }) => {
  const theme = useTheme();
  const Icon = icon;

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

  const iconStyles = {
    ...defaultIconSx,
    ...styledSizePresets[sizePreset].icon,
    ...styledColorPreset[colorPreset].icon,
    ...iconSx
  };

  const cardStyles = {
    ...defaultCardSx,
    ...styledSizePresets[sizePreset].card,
    ...styledColorPreset[colorPreset].card,
    ...styledShadowPreset[shadowPreset],
    ...cardSx
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...cardStyles }}>
      <Icon sx={{ fontSize: 20, ...iconStyles }} />
    </Box>
  );
};

export default IconChip;
