import React, { useState, useContext, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, TextField, Stack, Typography, Button } from '@mui/material';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import LayoutBox from 'components/LayoutBox/index';
import { Formik, Form, Field } from 'formik';
import validationSchema from 'formConfigs/authLogin/rules/validation/schema';
import { UserContext } from 'context/user/index';
import { CircularProgress } from '@mui/material';

const Dashboard = () => {
  const theme = useTheme();
  const { user, changeUser } = useContext(UserContext);
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.light}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveFormValues = useCallback(
    async (values) => {
      console.log('values', values);
      setLoading(true);
      await changeUser(values);
      setLoading(false);
      setEditMode(false);
    },
    [changeUser]
  );

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={`Profil`}
        description="Auf dieser Seite können Sie Ihr Abonnement verwalten."
      />
      <LayoutBox
        sx={{
          backgroundColor: theme.palette.common.white,
          padding: theme.shape.paddingBoxMedium
        }}
      >
        {editMode ? (
          <Formik
            initialValues={{
              firstName: user.firstName,
              lastName: user.lastName,
              company: user.company,
              email: user.email
            }}
            validationSchema={validationSchema}
            validateOnChange
            validateOnSubmit
          >
            {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {}, setFieldValue }) => (
              <Form autoComplete="off" noValidate>
                <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
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
                    <Field
                      component={TextField}
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
                    <Field
                      component={TextField}
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
                    {/* <Field
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
                    /> */}
                    <Typography variant="body1" sx={{ mb: 4 }}>
                      E-Mail: {user.email}
                    </Typography>
                  </Grid>
                </Grid>
                <Button variant="outlined" color="primary" onClick={() => setEditMode(false)} sx={{ mr: 1 }}>
                  Schließen
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                  disableElevation
                  onClick={() => saveFormValues(values)}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  Speichern
                </Button>
              </Form>
            )}
          </Formik>
        ) : (
          <Stack alignItems="start">
            <Typography variant="h6" gutterBottom>
              Name: {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Unternehmen: {user.company}
            </Typography>
            <Typography variant="body1" gutterBottom>
              E-Mail: {user.email}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setEditMode(true)} sx={{ mt: 3 }}>
              Bearbeiten
            </Button>
          </Stack>
        )}
      </LayoutBox>
    </>
  );
};

export default Dashboard;
