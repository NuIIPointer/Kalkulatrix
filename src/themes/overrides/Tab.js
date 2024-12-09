// ==============================|| OVERRIDES - TAB ||============================== //

export default function Tab(theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 0
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          position: 'relative',
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
          paddingBottom: theme.spacing(2),
          paddingTop: theme.spacing(2),
          minHeight: 0,
          minWidth: 0,
          '&:first-child': {
            marginLeft: 0
          },
          overflow: 'visible',
          '&:not(:last-child):after': {
            content: '""',
            position: 'absolute',
            bottom: '50%',
            right: theme.spacing(-2),
            height: '50%',
            width: 2,
            transform: 'translateY(50%)',
            backgroundColor: theme.palette.grey[500],
            opacity: '0.5'
          }
        }
      }
    }
  };
}
