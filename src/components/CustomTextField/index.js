import { TextField, InputAdornment } from '@mui/material';
import { useCallback } from 'react';
import { NumericFormat } from 'react-number-format';
import { Field } from 'formik';

const CustomTextField = ({
  type,
  onChange,
  fixedDecimals = true,
  decimals = 2,
  children,
  asFormikField,
  endAdornment,
  InputProps = {},
  ...others
}) => {
  const FieldComponentWrapped = useCallback(
    (props) => {
      return asFormikField ? <Field component={TextField} {...props} /> : <TextField {...props} />;
    },
    [asFormikField]
  );

  const handleChange = useCallback(
    (event) => {
      event.target.value = parseFloat(`${event.target.value}`.replaceAll('.', '').replaceAll(',', '.'));
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
        customInput={FieldComponentWrapped}
        thousandSeparator="."
        decimalSeparator=","
        {...others}
        InputProps={
          endAdornment
            ? {
                ...InputProps,
                endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>
              }
            : undefined
        }
      >
        {children}
      </NumericFormat>
    );
  }

  return (
    <FieldComponentWrapped type={type} onChange={onChange} {...others}>
      {children}
    </FieldComponentWrapped>
  );
};

export default CustomTextField;
