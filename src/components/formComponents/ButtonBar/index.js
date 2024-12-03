import React, { useCallback, useContext, useState } from 'react';
import { useFormikContext } from 'formik';
import { useSnackbar } from 'notistack';
import { StatusCodes } from 'http-status-codes';
import { Button, Stack, CircularProgress, Dialog, DialogActions, DialogTitle, Alert } from '@mui/material';
import { Save, ChevronLeft } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { UserContext } from 'context/user';
import { useNavigate, useParams } from 'react-router-dom';
import useFormLiteral from 'pages/form/useFormLiteral';

const ButtonBar = () => {
  const navigate = useNavigate();
  const { values = {}, errors, touched, setTouched } = useFormikContext();
  const { saveForm, requestStatusCodes, isForeignForm } = useContext(UserContext);
  const isSaving = requestStatusCodes.saveForm === StatusCodes.PROCESSING;
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const { formId, formSection } = useParams();
  const formLiteral = useFormLiteral();
  const nextStepKey = Object.keys(formLiteral).findIndex((key) => key === formSection) + 1;
  const isLaststep = formLiteral && nextStepKey === Object.keys(formLiteral)?.length;

  const [showTouchedFieldsDialog, setShowTouchedFieldsDialog] = useState(false);
  const hasTouchedFields = touched && Object.keys(touched)?.length > 0;

  const saveAction = useCallback(
    async (goNext) => {
      if (!isForeignForm) {
        await saveForm(values);
        if (!errors || Object.keys(errors)?.length === 0) {
          enqueueSnackbar('Formular erfolgreich gespeichert.', { variant: 'success' });
          if (goNext) {
            if (typeof nextStepKey === 'number' && !isLaststep) {
              const nextStep = Object.keys(formLiteral)[nextStepKey];
              navigate(`/office/form/${formId}/${nextStep}`);
            }
          }
        } else {
          const mappedTOTouched = {};
          Object.keys(errors).forEach((key) => {
            mappedTOTouched[key] = true;
          });
          setTouched(mappedTOTouched, true);
          enqueueSnackbar('Angaben gespeichert. Es gibt fehlende oder fehlerhafte Angaben.', { variant: 'warning' });
        }
      }
    },
    [isForeignForm, saveForm, values, errors, enqueueSnackbar, nextStepKey, isLaststep, formLiteral, navigate, formId, setTouched]
  );

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
          backgroundColor: theme.palette.common.white,
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
        {/* {errors && Object.keys(errors)?.length > 0 ? (
          <Alert
            severity={Object.keys(touched)?.length > 0 ? 'error' : 'info'}
            variant="outlined"
            sx={{ paddingY: 0, whiteSpace: 'break-word' }}
          >
            Es gibt unvollständige oder falsche Angaben
          </Alert>
        ) : (
          ''
        )} */}
      </Stack>
      <Dialog
        open={showTouchedFieldsDialog}
        onClose={() => setShowTouchedFieldsDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Änderungen speichern?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setShowTouchedFieldsDialog(false)}>Abbrechen</Button>
          <Button onClick={onAbortAndBack} autoFocus>
            Zurück ohne zu speichern
          </Button>
          <Button onClick={onSaveAndBack} autoFocus>
            Speichern und zurück
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonBar;
