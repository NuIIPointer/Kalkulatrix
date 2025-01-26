import { TextField, InputAdornment } from '@mui/material';
import { useCallback } from 'react';
import { NumericFormat } from 'react-number-format';
import { Field } from 'formik';
import { useFormikContext } from 'formik';

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
  const { setFieldValue } = useFormikContext();
  const FieldComponentWrapped = useCallback(
    (props) => {
      return asFormikField ? <Field component={TextField} {...props} /> : <TextField {...props} />;
    },
    [asFormikField]
  );

  const handleChange = useCallback(
    (event) => {
      const formattedValue = parseFloat(`${event.target.value}`.replaceAll('.', '').replaceAll(',', '.')) || 0;
      setFieldValue(others.name, formattedValue);
    },
    [others, setFieldValue]
  );
  if (type === 'number') {
    return (
      <NumericFormat
        fixedDecimalScale={fixedDecimals}
        decimalScale={decimals}
        customInput={FieldComponentWrapped}
        thousandSeparator="."
        decimalSeparator=","
        {...others}
        onChange={handleChange}
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
