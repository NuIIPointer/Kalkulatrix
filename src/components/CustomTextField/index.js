import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { NumericFormat } from 'react-number-format';

const CustomTextField = ({ type, onChange, fixedDecimals = true, decimals = 2, children, ...others }) => {
  const handleChange = useCallback(
    (event) => {
      event.target.value = `${event.target.value}`.replaceAll('.', '').replaceAll(',', '.');
      onChange(event);
    },
    [onChange]
  );
  if (type === 'number') {
    return (
      <NumericFormat
        onChange={handleChange}
        fixedDecimalScale={fixedDecimals}
        decimalScale={decimals}
        customInput={TextField}
        thousandSeparator="."
        decimalSeparator=","
        {...others}
      >
        {children}
      </NumericFormat>
    );
  }

  return (
    <TextField type={type} onChange={onChange} {...others}>
      {children}
    </TextField>
  );
};

export default CustomTextField;
