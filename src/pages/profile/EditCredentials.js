import React, { useState, useContext, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, TextField, Stack, Typography, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import validationSchema from 'formConfigs/authLogin/rules/validation/schema';
import { UserContext } from 'context/user/index';
import { CircularProgress } from '@mui/material';
import LayoutBox from 'components/LayoutBox/index';
import { useSnackbar } from 'notistack';

const EditCredentials = () => {
  const theme = useTheme();
  const { user, changeEmail, changePassword } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editModePassword, setEditModePassword] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const saveFormValues = useCallback(
    async (values) => {
      setLoading(true);
      const isSuccessful = await changeEmail(values);
      setLoading(false);
      if (isSuccessful) {
        setEditMode(false);
        enqueueSnackbar('E-Mail Adresse erfolgreich geändert.', { variant: 'success' });
      } else {
        enqueueSnackbar('Die E-Mail Adresse konnte nicht geändert werden.', { variant: 'error' });
      }
    },
    [changeEmail, enqueueSnackbar]
  );

  const saveFormValuesPassword = useCallback(
    async (values) => {
      setLoadingPassword(true);
      const isSuccessful = await changePassword(values);
      setLoadingPassword(false);
      if (isSuccessful) {
        setEditModePassword(false);
        enqueueSnackbar('Passwort erfolgreich geändert.', { variant: 'success' });
      } else {
        enqueueSnackbar('Das Passwort konnte nicht geändert werden. Loggen Sie sich erneut ein und versuchen Sie es erneut', {
          variant: 'error'
        });
      }
    },
    [changePassword, enqueueSnackbar]
  );

  const renderListItem = useCallback(
    (label, value) => (
      <>
        <Typography variant="body1" component="dt" sx={{ fontWeight: 'bold' }}>
          {label}:
        </Typography>
        <Typography variant="body1" component="dd">
          {value}
        </Typography>
      </>
    ),
    []
  );

  return (
    <LayoutBox
      sx={{
        backgroundColor: theme.palette.common.white,
        padding: theme.shape.paddingBoxMedium,
        mb: 2
      }}
    >
      <Typography variant="h2" sx={{ mb: 1 }}>
        Anmeldeinformationen
      </Typography>
      {editMode && (
        <Formik
          initialValues={{
            email: user.email
          }}
          validationSchema={validationSchema}
          validateOnChange
          validateOnSubmit
        >
          {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {}, setFieldValue }) => (
            <Form autoComplete="off" onSubmit={() => saveFormValues(values)}>
              <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                <Grid item xs={12} sm={6} mt={4}>
                  <Field
                    component={TextField}
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
                <Grid item xs={12} sm={6} mt={4}>
                  <Field
                    component={TextField}
                    id="emailConfirm"
                    name="emailConfirm"
                    label="E-Mail bestätigen"
                    type="emailConfirm"
                    autoComplete="emailConfirm"
                    required
                    value={values.emailConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.emailConfirm && Boolean(errors.emailConfirm)}
                    helperText={touched.emailConfirm && errors.emailConfirm}
                  />
                </Grid>
              </Grid>
              <Stack justifyContent="flex-end" direction="row">
                <Button variant="outlined" color="primary" onClick={() => setEditMode(false)} sx={{ mr: 1 }}>
                  Schließen
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                  disableElevation
                  // onClick={() => saveFormValues(values)}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  Speichern
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      )}
      {editModePassword && (
        <Formik initialValues={{}} validationSchema={validationSchema} validateOnChange validateOnSubmit>
          {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {}, setFieldValue }) => (
            <Form autoComplete="off" onSubmit={() => saveFormValuesPassword(values)}>
              <Stack mt={4} />
              <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    id="password"
                    name="password"
                    label="Neues Passwort"
                    type="password"
                    autoComplete="password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    label="Passwort bestätigen"
                    type="password"
                    autoComplete="passwordConfirm"
                    required
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                  />
                </Grid>
              </Grid>
              <Stack justifyContent="flex-end" direction="row">
                <Button variant="outlined" color="primary" onClick={() => setEditModePassword(false)} sx={{ mr: 1 }}>
                  Schließen
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loadingPassword}
                  disableElevation
                  endIcon={loadingPassword ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  Speichern
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      )}
      {!editMode && !editModePassword && (
        <Stack alignItems="flex-end" direction="row" gap={2}>
          <Box
            component="dl"
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: `${theme.spacing(1)} ${theme.spacing(2)}`,
              mr: 'auto'
            }}
          >
            {renderListItem('E-Mail', user.email)}
            {renderListItem('Passwort', '********')}
          </Box>
          <Button variant="contained" color="primary" onClick={() => setEditMode(true)} sx={{ mt: 3 }}>
            E-Mail ändern
          </Button>
          <Button variant="contained" color="primary" onClick={() => setEditModePassword(true)} sx={{ mt: 3 }}>
            Passwort ändern
          </Button>
        </Stack>
      )}
    </LayoutBox>
  );
};

export default EditCredentials;
