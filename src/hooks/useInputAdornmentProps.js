import { InputAdornment } from '@mui/material';

const variants = {
  euro: '€',
  stunden: 'Stunden',
  prozent: '%'
};

const useInputAdornmentProps = (variant, position = 'end') => {
  return {
    startAdornment: position === 'start' ? <InputAdornment position="start">{variants[variant] | variant}</InputAdornment> : undefined,
    endAdornment: position !== 'start' ? <InputAdornment position="end">{variants[variant] | variant}</InputAdornment> : undefined,
  };
};

export default useInputAdornmentProps;
