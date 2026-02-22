// ==============================|| OVERRIDES - CARD ||============================== //

export default function MuiCard(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.card,
          transition: 'box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: theme.customShadows.button
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
