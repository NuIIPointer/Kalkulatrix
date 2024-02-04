import React, { useCallback, useContext, useState } from 'react';
import { useFormikContext } from 'formik';
import { useSnackbar } from 'notistack';
import { StatusCodes } from 'http-status-codes';
import { Button, Stack, CircularProgress, Dialog, DialogActions, DialogTitle, Alert } from '@mui/material';
import { Save, ChevronLeft } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { UserContext } from 'context/user';

import { useNavigate } from 'react-router-dom';

const ButtonBar = () => {
  const navigate = useNavigate();
  const { values = {}, errors, touched } = useFormikContext();
  const { saveForm, requestStatusCodes } = useContext(UserContext);
  const isSaving = requestStatusCodes.saveForm === StatusCodes.PROCESSING;
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const [showTouchedFieldsDialog, setShowTouchedFieldsDialog] = useState(false);
  const hasTouchedFields = Object.keys(touched).length > 0;

  const saveAction = useCallback(async () => {
    await saveForm(values);
    if (errors && Object.keys(errors).length === 0) {
      enqueueSnackbar('Formular erfolgreich gespeichert.', { variant: 'success' });
    } else {
      enqueueSnackbar('Angaben gespeichert. Es gibt fehlende oder fehlerhafte Angaben.', { variant: 'warning' });
    }
  }, [saveForm, values, errors, enqueueSnackbar]);

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
          borderTopRightRadius: theme.shape.borderRadius * 4,
          borderTopLeftRadius: theme.shape.borderRadius * 4,
          bottom: '0',
          right: '0',
          paddingX: { xs: theme.spacing(1.5), sm: theme.spacing(3) },
          paddingY: { xs: theme.spacing(1.5), sm: theme.spacing(2) },
          backgroundColor: theme.palette.common.white,
          width: barWidth,
          zIndex: '1000',
          boxShadow: theme.customShadows.z2
        }}
      >
        <Button
          startIcon={isSaving ? <CircularProgress size="1rem" /> : <ChevronLeft />}
          variant="outlined"
          color="primary"
          onClick={handleGoBack}
        >
          zurück
        </Button>
        {errors && Object.keys(errors).length > 0 ? (
          <Alert severity="error" variant="outlined">
            Es gibt unvollständige oder falsche Angaben
          </Alert>
        ) : (
          ''
        )}
        <Button
          startIcon={isSaving ? <CircularProgress size="1rem" color="white" /> : <Save />}
          variant="contained"
          color="primary"
          onClick={saveAction}
          type="submit"
        >
          {isSaving ? 'lädt' : 'speichern'}
        </Button>
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
