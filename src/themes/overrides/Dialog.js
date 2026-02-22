// ==============================|| OVERRIDES - Dialog ||============================== //

import glassEffect from '../glass';

export default function Dialog(theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          // borderRadius: theme.spacing(2)
        },
        paper: {
          borderRadius: theme.spacing(theme.shape.borderRadiusBox),
          ...glassEffect({ intensity: 'medium' }),
          boxShadow: theme.customShadows.z3
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
          fontSize: '1.2rem'
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
          paddingBottom: 0
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: `${theme.spacing(3)} ${theme.spacing(4)}`
        }
      }
    }
  };
}
