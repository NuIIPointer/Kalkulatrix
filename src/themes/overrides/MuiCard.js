// ==============================|| OVERRIDES - CARD ||============================== //

export default function MuiCard(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.z1,
          transition: 'box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: theme.customShadows.z2
          }
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          // padding: '0px'
        }
      }
    }
  };
}
