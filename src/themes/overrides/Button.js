// ==============================|| OVERRIDES - BUTTON ||============================== //

import glassEffect from '../glass';

const glassHover = glassEffect({ intensity: 'light', border: false });

export default function Button(theme) {
  const disabledStyle = {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[200]
    }
  };

  const colorShadow = (shadow) => ({
    boxShadow: shadow,
    '&:hover': { boxShadow: shadow }
  });

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`
        },
        contained: {
          ...colorShadow(theme.customShadows.button),
          ...disabledStyle
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${theme.palette.primary[500]} 0%, ${theme.palette.primary[600]} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${theme.palette.primary[400]} 0%, ${theme.palette.primary[500]} 100%)`,
            boxShadow: theme.customShadows.buttonHover
          }
        },
        containedWarning: colorShadow(theme.customShadows.buttonWarning),
        containedError: colorShadow(theme.customShadows.buttonError),
        containedSuccess: colorShadow(theme.customShadows.buttonSuccess),
        containedSecondary: colorShadow(theme.customShadows.buttonSecondary),
        outlined: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: theme.customShadows.buttonHover,
            ...glassHover
          },
          ...disabledStyle
        },
        outlinedWarning: {
          '&:hover': { boxShadow: theme.customShadows.buttonWarningHover, ...glassHover }
        },
        outlinedError: {
          '&:hover': { boxShadow: theme.customShadows.buttonErrorHover, ...glassHover }
        },
        outlinedSuccess: {
          '&:hover': { boxShadow: theme.customShadows.buttonSuccessHover, ...glassHover }
        },
        outlinedSecondary: {
          '&:hover': { boxShadow: theme.customShadows.buttonSecondaryHover, ...glassHover }
        }
      }
    }
  };
}
