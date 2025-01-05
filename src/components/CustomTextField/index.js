import { TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const CustomTextField = ({ type, onChange, fixedDecimals = true, decimals = 2, ...others }) => {
  if (type === 'number') {
    const handleChange = (event) => {
      event.target.value = `${event.target.value}`.replaceAll('.', '').replaceAll(',', '.');
      console.log('after', event);
      onChange(event);
    };
    // const handleBlur = (event) => {
    //   const { value } = event.target;
    //   const changedEvent = {
    //     ...event,
    //     target: {
    //       ...event.target,
    //       value: `${value}`.replaceAll('.', '').replaceAll(',', '.')
    //     }
    //   };
    //   onChange(changedEvent);
    // };

    return (
      <NumericFormat
        onChange={handleChange}
        onBlur={onChange}
        fixedDecimalScale={fixedDecimals}
        decimalScale={decimals}
        customInput={TextField}
        thousandSeparator="."
        decimalSeparator=","
        valueIsNumericString
        {...others}
      />
    );
  }

  return <TextField type={type} onChange={onChange} {...others} />;
};

export default CustomTextField;
