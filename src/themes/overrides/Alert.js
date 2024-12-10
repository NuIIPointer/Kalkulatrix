// ==============================|| OVERRIDES - Alert ||============================== //

export default function Alert(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // borderRadius: theme.spacing(2)
        },
        icon: {
          paddingTop: theme.spacing(1.5),
          paddingBottom: 0
        },
        standardInfo: {
          backgroundColor: theme.palette.primary[900],
          border: `1px solid ${theme.palette.primary[800]}`,
          '.MuiAlert-icon': {
            color: theme.palette.primary[700]
          }
        }
      }
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginBottom: 2,
          marginTop: 3
        }
      }
    }
  };
}
