import { numericFormatter } from 'react-number-format';

const formattedNumber = (number = '', { fixedDecimals = true, decimals = 2 } = {}) => {
  return numericFormatter(number.toString(), {
    fixedDecimalScale: fixedDecimals,
    decimalScale: decimals,
    thousandSeparator: '.',
    decimalSeparator: ','
  });
};

export default formattedNumber;
