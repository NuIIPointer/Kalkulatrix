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
