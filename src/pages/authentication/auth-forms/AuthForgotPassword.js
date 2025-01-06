import { useContext } from 'react';

// material-ui
import { Button, FormHelperText, Grid } from '@mui/material';

// Form
import { Formik, Form } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { UserContext } from 'context/user';

// assets
import validationSchema from 'formConfigs/authForgotPassword/rules/validation/schema';
import { enqueueSnackbar } from 'notistack';
import CustomTextField from 'components/CustomTextField/index';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthForgotPassword = () => {
  const { resetPasswordMail } = useContext(UserContext);

  const handleRegister = ({ email }) => {
    const successful = resetPasswordMail(email);

    if (successful) {
      enqueueSnackbar('Es wurde eine E-Mail zum zurücksetzen des Passworts gesendet.', {
        variant: 'success'
      });
    } else {
      enqueueSnackbar('Es ist ein Fehler aufgetreten. VErsuchen Sie es später erneut.', {
        variant: 'error'
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {} }) => (
          <Form autoComplete="off" noValidate>
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
              <Grid item xs={12}>
                <CustomTextField
                  asFormikField
                  id="email"
                  name="email"
                  label="E-Mail"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    E-Mail zum zurücksetzen des Passworts senden
                  </Button>
                </AnimateButton>
              </Grid>
              {/*
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption">Anmelden mit</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid>
              */}
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthForgotPassword;
