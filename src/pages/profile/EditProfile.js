import React, { useState, useContext, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Typography, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import validationSchema from 'formConfigs/authLogin/rules/validation/schema';
import { UserContext } from 'context/user/index';
import { CircularProgress } from '@mui/material';
import LayoutBox from 'components/LayoutBox/index';
import { useSnackbar } from 'notistack';
import CustomTextField from 'components/CustomTextField/index';

const EditProfile = () => {
  const theme = useTheme();
  const { user, changeUser } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveFormValues = useCallback(
    async (values) => {
      setLoading(true);
      const isSuccessful = await changeUser(values);
      setLoading(false);

      if (isSuccessful) {
        setEditMode(false);
        enqueueSnackbar('Profildaten erfolgreich geändert.', { variant: 'success' });
      } else {
        enqueueSnackbar('Die Profildaten konnten nicht geändert werden.', { variant: 'error' });
      }
    },
    [changeUser, enqueueSnackbar]
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
        Benutzerdaten
      </Typography>
      {editMode ? (
        <Formik
          initialValues={{
            firstName: user.firstName,
            lastName: user.lastName,
            company: user.company
          }}
          validationSchema={validationSchema}
          validateOnChange
          validateOnSubmit
        >
          {({ values = {}, errors = {}, handleChange, handleBlur, touched = {} }) => (
            <Form autoComplete="off" onSubmit={() => saveFormValues(values)}>
              <Stack mt={4} />
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
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  Speichern
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      ) : (
        <Stack alignItems="flex-end" direction="row" flexWrap="wrap" gap={2}>
          <Box
            component="dl"
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: `${theme.spacing(1)} ${theme.spacing(2)}`,
              mr: 'auto'
            }}
          >
            {renderListItem('Name', `${user.firstName} ${user.lastName}`)}
            {renderListItem('Unternehmen', user.company)}
          </Box>
          <Button variant="contained" color="primary" onClick={() => setEditMode(true)}>
            Benutzerdaten bearbeiten
          </Button>
        </Stack>
      )}
    </LayoutBox>
  );
};

export default EditProfile;
