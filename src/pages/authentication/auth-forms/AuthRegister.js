import { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Button, FormControl, FormHelperText, Grid, Link, IconButton, InputAdornment, Typography, TextField } from '@mui/material';

// Form
import { Formik, Form } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { UserContext } from 'context/user';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import validationSchema from 'formConfigs/authRegister/rules/validation/schema';
import { Alert, CircularProgress } from '@mui/material';
import Loader from 'components/Loader';
import { StatusCodes } from 'http-status-codes';
import CustomTextField from 'components/CustomTextField/index';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const { registerUser, requestStatusCodes } = useContext(UserContext);
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const showSuccess = requestStatusCodes.createUser === StatusCodes.OK;
  const showError = requestStatusCodes.createUser >= 400;
  const registerLoading = requestStatusCodes.createUser === StatusCodes.PROCESSING;
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const handleRegister = async ({ email, password, firstName, lastName, company }) => {
    // Sign in an existing user with Firebase
    await registerUser({ email, password, firstName, lastName, company });
  };

  if (showSuccess) {
    return (
      <>
        <Alert severity="success">Sie haben sich erfolgreich registriert!</Alert>
        <Button href="/login" size="large" variant="contained" color="primary" sx={{ mt: 2, ml: 'auto' }}>
          Jetzt anmelden
        </Button>
      </>
    );
  }

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          handleRegister({
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            company: values.company
          });
        }}
      >
        {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {} }) => (
          <Form autoComplete="off" noValidate>
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  asFormikField

                  id="firstName"
                  name="firstName"
                  label="Vorname"
                  required
                  fullWidth
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  asFormikField

                  id="lastName"
                  name="lastName"
                  label="Nachname"
                  required
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  asFormikField

                  id="company"
                  name="company"
                  label="Unternehmen"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.company && Boolean(errors.company)}
                  helperText={touched.company && errors.company}
                />
              </Grid>
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
              <Grid item xs={12}>
                <CustomTextField
                  asFormikField

                  id="password"
                  name="password"
                  label="Passwort"
                  autoComplete="password"
                  required
                  value={values.password}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(event.target.value);
                  }}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Durch die Anmeldung stimmst du unseren{' '}
                  <Link
                    variant="subtitle2"
                    component={RouterLink}
                    to="/files/kalkulatrix-allgemeine-geschaeftsbedingungen.pdf"
                    target="_blank"
                    download
                    sx={{ fontSize: 'inherit' }}
                  >
                    Nutzungsbedingungen
                  </Link>{' '}
                  und unserer{' '}
                  <Link variant="subtitle2" component={RouterLink} to="/datenschutz" target="_blank" sx={{ fontSize: 'inherit' }}>
                    Datenschutzrichtlinie
                  </Link>{' '}
                  zu.
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              {showError && (
                <Grid item xs={12}>
                  <Alert severity="error">
                    Es ist etwas schief gelaufen. Stelle sicher, dass es noch keinen Account mit dieser E-Mail-Adresse gibt.
                  </Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting || registerLoading}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Profil erstellen {registerLoading && <CircularProgress size="1rem" sx={{ ml: 1 }} />}
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
      {registerLoading && <Loader />}
    </>
  );
};

export default AuthRegister;
