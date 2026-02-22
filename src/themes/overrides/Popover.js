// ==============================|| OVERRIDES - Popover ||============================== //

import glassEffect from '../glass';

export default function Popover(theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          maxWidth: '320px',
          ...glassEffect({ intensity: 'strong' }),
          boxShadow: theme.customShadows.z2
        }
      }
    }
  };
}
