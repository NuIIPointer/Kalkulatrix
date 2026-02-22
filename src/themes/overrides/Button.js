// ==============================|| OVERRIDES - BUTTON ||============================== //

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
        containedWarning: colorShadow(theme.customShadows.buttonWarning),
        containedError: colorShadow(theme.customShadows.buttonError),
        containedSuccess: colorShadow(theme.customShadows.buttonSuccess),
        containedSecondary: colorShadow(theme.customShadows.buttonSecondary),
        outlined: {
          boxShadow: 'none',
          '&:hover': { boxShadow: theme.customShadows.buttonHover },
          ...disabledStyle
        },
        outlinedWarning: {
          '&:hover': { boxShadow: theme.customShadows.buttonWarningHover }
        },
        outlinedError: {
          '&:hover': { boxShadow: theme.customShadows.buttonErrorHover }
        },
        outlinedSuccess: {
          '&:hover': { boxShadow: theme.customShadows.buttonSuccessHover }
        },
        outlinedSecondary: {
          '&:hover': { boxShadow: theme.customShadows.buttonSecondaryHover }
        }
      }
    }
  };
}
