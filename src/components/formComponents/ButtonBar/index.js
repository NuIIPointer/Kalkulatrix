import React, { useCallback, useContext, useState } from 'react';
import { useFormikContext } from 'formik';
import { useSnackbar } from 'notistack';
import { StatusCodes } from 'http-status-codes';
import { Button, Stack, CircularProgress, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Alert } from '@mui/material';
import { Save, ChevronLeft } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { UserContext } from 'context/user';
import { useNavigate, useParams } from 'react-router-dom';
import useFormLiteral from 'pages/form/useFormLiteral';

// Recursively converts Formik errors object into a matching touched object
// so that deeply nested array field errors are properly displayed
const errorsToTouched = (errors) => {
  if (typeof errors !== 'object' || errors === null) {
    return true;
  }
  if (Array.isArray(errors)) {
    return errors.map((item) => errorsToTouched(item));
  }
  const touched = {};
  Object.keys(errors).forEach((key) => {
    touched[key] = errorsToTouched(errors[key]);
  });
  return touched;
};

const ButtonBar = () => {
  const navigate = useNavigate();
  const { values = {}, touched, setTouched, validateForm } = useFormikContext();
  const { saveForm, requestStatusCodes, isForeignForm } = useContext(UserContext);
  const isSaving = requestStatusCodes.saveForm === StatusCodes.PROCESSING;
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const { formId, formSection } = useParams();
  const formLiteral = useFormLiteral();
  const nextStepKey = Object.keys(formLiteral).findIndex((key) => key === formSection) + 1;
  const isLaststep = formLiteral && nextStepKey === Object.keys(formLiteral)?.length;

  const [showTouchedFieldsDialog, setShowTouchedFieldsDialog] = useState(false);
  const [showValidationErrorsDialog, setShowValidationErrorsDialog] = useState(false);
  const [hasValidationErrors, setHasValidationErrors] = useState(false);
  const hasTouchedFields = touched && Object.keys(touched)?.length > 0;

  const saveAction = useCallback(
    async (goNext) => {
      if (!isForeignForm) {
        await saveForm(values);
        enqueueSnackbar('Formular erfolgreich gespeichert.', { variant: 'success' });

        const currentErrors = await validateForm();
        const hasErrors = currentErrors && Object.keys(currentErrors).length > 0;

        if (hasErrors) {
          setTouched(errorsToTouched(currentErrors), true);
          setHasValidationErrors(true);
          enqueueSnackbar('Es gibt unvollständige oder fehlerhafte Angaben auf dieser Seite.', { variant: 'warning' });
        } else {
          setHasValidationErrors(false);
        }

        if (goNext && typeof nextStepKey === 'number' && !isLaststep) {
          if (hasErrors) {
            setShowValidationErrorsDialog(true);
          } else {
            const nextStep = Object.keys(formLiteral)[nextStepKey];
            navigate(`/office/form/${formId}/${nextStep}`);
          }
        }
      }
    },
    [isForeignForm, saveForm, values, validateForm, enqueueSnackbar, nextStepKey, isLaststep, formLiteral, navigate, formId, setTouched]
  );

  const handleNavigateAnyway = useCallback(() => {
    setShowValidationErrorsDialog(false);
    setHasValidationErrors(false);
    if (typeof nextStepKey === 'number' && !isLaststep) {
      const nextStep = Object.keys(formLiteral)[nextStepKey];
      navigate(`/office/form/${formId}/${nextStep}`);
    }
  }, [nextStepKey, isLaststep, formLiteral, navigate, formId]);

  const handleGoBack = useCallback(() => {
    if (!hasTouchedFields) {
      navigate('/office/form/overview');
    } else {
      setShowTouchedFieldsDialog(true);
    }
  }, [hasTouchedFields, navigate]);

  const onAbortAndBack = useCallback(() => {
    navigate('/office/form/overview');
  }, [navigate]);

  const onSaveAndBack = useCallback(async () => {
    await saveAction();
    navigate('/office/form/overview');
  }, [navigate, saveAction]);

  const barWidth = {
    xs: `calc(100% + ${theme.spacing(2)})`,
    sm: `calc(100% + ${theme.spacing(4)})`,
    md: `calc(100% + ${theme.spacing(6)})`
  };
  const barMarginReset = { xs: theme.spacing(-1), sm: theme.spacing(-2), md: theme.spacing(-3) };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        gap={1}
        sx={{
          position: 'sticky',
          mt: { xs: 4, md: 6, lg: 8 },
          ml: barMarginReset,
          borderRadius: theme.spacing(2.5),
          bottom: { xs: theme.spacing(1), md: theme.spacing(2) },
          marginBottom: { xs: theme.spacing(1), md: theme.spacing(2) },
          right: '0',
          padding: { xs: theme.spacing(1.5), sm: theme.spacing(2) },
          ...theme.glass({ intensity: 'strong' }),
          width: barWidth,
          zIndex: '1000',
          boxShadow: theme.customShadows.z2,
          flexWrap: 'wrap'
        }}
      >
        <Button
          startIcon={isSaving ? <CircularProgress size="1rem" /> : <ChevronLeft />}
          variant="outlined"
          color="primary"
          onClick={handleGoBack}
          sx={{ marginRight: 'auto' }}
        >
          zurück zur Übersicht
        </Button>
        <Stack gap={1} direction="row" flexWrap="wrap">
          <Button
            startIcon={isSaving ? <CircularProgress size="1rem" color="white" /> : <Save />}
            variant="outlined"
            color="primary"
            onClick={() => saveAction()}
            type="submit"
            disabled={isSaving || isForeignForm}
          >
            speichern
          </Button>
          {!isLaststep && (
            <Button
              startIcon={isSaving ? <CircularProgress size="1rem" color="white" /> : <Save />}
              variant="contained"
              color="primary"
              onClick={() => saveAction(true)}
              type="button"
              disabled={isSaving || isForeignForm}
            >
              speichern und weiter
            </Button>
          )}
        </Stack>
        {hasValidationErrors && (
          <Alert severity="error" variant="outlined" sx={{ paddingY: 0, width: '100%', whiteSpace: 'break-spaces' }}>
            Es gibt unvollständige oder fehlerhafte Angaben auf dieser Seite.
          </Alert>
        )}
      </Stack>
      <Dialog
        open={showTouchedFieldsDialog}
        onClose={() => setShowTouchedFieldsDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Änderungen speichern?</DialogTitle>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={() => setShowTouchedFieldsDialog(false)}>
            Abbrechen
          </Button>
          <Button variant="outlined" color="error" onClick={onAbortAndBack}>
            Zurück ohne zu speichern
          </Button>
          <Button variant="contained" color="primary" onClick={onSaveAndBack}>
            Speichern und zurück
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={showValidationErrorsDialog}
        onClose={() => setShowValidationErrorsDialog(false)}
        aria-labelledby="validation-dialog-title"
        aria-describedby="validation-dialog-description"
      >
        <DialogTitle id="validation-dialog-title">Fehlerhafte Angaben</DialogTitle>
        <DialogContent>
          <DialogContentText id="validation-dialog-description" sx={{ color: 'text.primary' }}>
            Es gibt unvollständige oder fehlerhafte Angaben auf dieser Seite. Möchten Sie trotzdem zur nächsten Seite wechseln?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={() => setShowValidationErrorsDialog(false)}>
            Fehler korrigieren
          </Button>
          <Button variant="outlined" color="error" onClick={handleNavigateAnyway}>
            Trotzdem weiter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonBar;
