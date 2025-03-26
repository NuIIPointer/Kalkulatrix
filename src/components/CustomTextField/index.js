import { TextField, InputAdornment, Box } from '@mui/material';
import { useCallback, useContext } from 'react';
import { NumericFormat } from 'react-number-format';
import { Field } from 'formik';
import { useFormikContext } from 'formik';
import { EditOffOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { StripeContext } from 'context/stripe/index';

const CustomTextField = ({
  type,
  onChange,
  fixedDecimals = true,
  decimals = 2,
  children,
  asFormikField,
  endAdornment,
  InputProps = {},
  onlyPremium,
  disableThousandSeperator = false,
  helperText,
  ...others
}) => {
  const theme = useTheme();
  const { setFieldValue } = useFormikContext();
  const { hasActiveSubscription } = useContext(StripeContext);
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

  const readOnlySetting = InputProps.readOnly || (!hasActiveSubscription && onlyPremium);
  const helperTextSetting =
    helperText ||
    (onlyPremium && !hasActiveSubscription ? (
      <Box
        sx={{
          display: 'inline-block',
          backgroundColor: theme.palette.grey[600],
          color: theme.palette.common.white,
          px: 1,
          py: 0.5,
          borderRadius: 1,
          lineHeight: '1.1em'
        }}
      >
        Dieses Feld kann nur mit einem aktiven Abonnement bearbeitet werden.
      </Box>
    ) : (
      ''
    ));
  const endAdornmentSetting = readOnlySetting ? (
    <InputAdornment position="end">
      <EditOffOutlined fontSize=".8em" />
    </InputAdornment>
  ) : (
    endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>
  );

  if (type === 'number') {
    return (
      <NumericFormat
        fixedDecimalScale={fixedDecimals}
        decimalScale={decimals}
        customInput={FieldComponentWrapped}
        thousandSeparator={disableThousandSeperator ? '' : '.'}
        decimalSeparator=","
        {...others}
        onChange={handleChange}
        InputProps={{
          endAdornment: endAdornmentSetting,
          readOnly: readOnlySetting
        }}
        helperText={helperTextSetting}
        endAdornment={endAdornmentSetting}
      >
        {children}
      </NumericFormat>
    );
  }

  return (
    <FieldComponentWrapped
      type={type}
      onChange={onChange}
      {...others}
      InputProps={{ ...InputProps, readOnly: readOnlySetting, endAdornment: endAdornmentSetting }}
      helperText={helperTextSetting}
    >
      {children}
    </FieldComponentWrapped>
  );
};

export default CustomTextField;
