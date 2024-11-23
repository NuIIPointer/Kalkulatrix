import React, { useContext, useMemo, useState } from 'react';
import dayjs from 'dayjs';

// material-ui
import {
  Alert,
  AlertTitle,
  Grid,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import TextTeaserCard from 'components/TextTeaserCard/index';
import { Link } from 'react-router-dom';

// icons
import { ChevronRight, DeleteOutlineOutlined, CopyAllOutlined } from '@mui/icons-material';

// redux
import { UserContext } from 'context/user';
import { StripeContext } from 'context/stripe/index';
import LayoutBox from 'components/LayoutBox/index';
import { enqueueSnackbar } from 'notistack';

const newFormName = `Kalkulation vom ${dayjs(new Date()).format('DD.MM.YYYY')}`;

const SelectFormView = ({ formType, sections }) => {
  const theme = useTheme();
  const { createForm, copyForm: copyFormContext, formsData = {}, deleteForm } = useContext(UserContext);
  const { hasActiveSubscription } = useContext(StripeContext);
  const [openSubBanner, setOpenSubBanner] = useState(false);
  const [showMoreFormsWarning, setShowMoreFormsWarning] = useState(false);
  const [showDeleteFormDialog, setShowDeleteFormDialog] = useState(false);

  const removeForm = async (formId) => {
    await deleteForm(formId);
    setShowDeleteFormDialog(false);
  };

  const copyForm = async (formId) => {
    if (hasActiveSubscription) {
      const newFormId = await copyFormContext({ formId, title: newFormName });
      if (newFormId) {
        enqueueSnackbar('Das Formular wurde erfolgreich kopiert.', { variant: 'success' });
        await setTimeout(() => document.getElementById(`formCard-${newFormId}`).scrollIntoView({ behavior: 'smooth' }), 250);
      } else {
        enqueueSnackbar('Es ist ein Fehler aufgetreten. Versuchen Sie es später erneut.', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Sie benötigen ein aktives Abonnement um Formulare kopieren zu können.', { variant: 'warning' });
    }
  };

  const visibleForms = useMemo(() => {
    const formsToUse = {};
    let shouldSetShowWarning = false;
    formsData &&
      Object.keys(formsData)?.forEach((formKey) => {
        const currentForm = formsData[formKey];
        if (currentForm.type === formType) {
          const shouldAddFormToView = hasActiveSubscription || Object.keys(formsToUse)?.length === 0;

          if (shouldAddFormToView) {
            formsToUse[formKey] = currentForm;
          } else {
            shouldSetShowWarning = true;
          }
        }
      });

    setShowMoreFormsWarning(shouldSetShowWarning);

    return formsToUse;
  }, [formType, formsData, hasActiveSubscription]);

  const addForm = () => {
    createForm({ title: newFormName, type: formType });
  };

  const handleOpenSub = () => {
    setOpenSubBanner(true);
  };
  const handleCloseSub = () => {
    setOpenSubBanner(false);
  };

  const formCardsDom = () => {
    const formIds = Object.keys(visibleForms);
    const formCards =
      formIds
        .map((formId) => {
          const formData = visibleForms[formId];
          const sectionsDom = sections?.map((section) => {
            return (
              <Grid key={formId} item xs={12} sm={6}>
                <TextTeaserCard
                  grow
                  primaryText={section.title}
                  outerSx={{
                    boxShadow: 'none',
                    border: `1px solid ${theme.palette.grey[400]}`
                  }}
                  // prefixText={`zuletzt bearbeitet: ${dayjs(formData.creationDate).format('DD.MM.YYYY')}`}
                  prefixText={
                    <Stack
                      sx={{
                        display: 'flex',
                        width: '100%',
                        flexWrap: 'no-wrap',
                        hyphens: 'auto',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}
                      component="span"
                    >
                      Blatt
                    </Stack>
                  }
                  link={`/office/form/${formId}/${section.linkPart}`}
                  light={!section.backgroundColor}
                  color={section.backgroundColor || theme.palette.common.white}
                />
              </Grid>
            );
          });

          return (
            <Grid key={formId} item xs={12}>
              <LayoutBox
                id={`formCard-${formId}`}
                sx={{
                  backgroundColor: theme.palette.common.white,
                  padding: theme.shape.paddingBoxMedium
                }}
              >
                <Stack
                  flexDirection="row"
                  alignItems="flex-end"
                  justifyContent="space-between"
                  sx={{ mb: { xs: 2, sm: 3 } }}
                  flexWrap="wrap"
                >
                  <Typography variant="h2" component="h3" sx={{ mb: 1 }}>
                    {formData.title || 'Formular: ' + formData.id}
                  </Typography>
                  <Stack flexDirection={{ xs: 'column', sm: 'row' }} gap={1}>
                    <Button
                      startIcon={<CopyAllOutlined />}
                      color={hasActiveSubscription ? 'primary' : 'secondary'}
                      variant="outlined"
                      onClick={() => copyForm(formId)}
                    >
                      Formular kopieren
                    </Button>
                    <Button
                      startIcon={<DeleteOutlineOutlined />}
                      color="error"
                      variant="outlined"
                      onClick={() => setShowDeleteFormDialog(formId)}
                    >
                      Formular löschen
                    </Button>
                  </Stack>
                </Stack>
                <Alert severity="info" sx={{ mb: 3, border: '1px solid #00000012' }}>
                  <AlertTitle>
                    Für eine effiziente und korrekte Kalkulation benötigen Sie einen aktuellen Jahresabschluss oder betriebswirtschaftliche
                    Auswertung sowie eine Übersicht der Daten Ihrer Angestellten.
                  </AlertTitle>
                </Alert>
                <Grid spacing={{ xs: 2, lg: 3 }} container>
                  {sectionsDom}
                </Grid>
              </LayoutBox>
            </Grid>
          );
        })
        .filter(Boolean) || [];

    return (
      <>
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing(3) }}>
          {formCards}

          <Grid item xs={12} sm={6} sx={{ mt: theme.spacing(4) }}>
            {showMoreFormsWarning && (
              <Alert sx={{ mb: 2 }} severity="warning">
                Es gibt weitere Kalkulationen. Setzen Sie das Abonnement fort um alle Kalkulationen anzuzeigen.
              </Alert>
            )}
            <TextTeaserCard
              onClick={hasActiveSubscription ? addForm : handleOpenSub}
              primaryText={
                <Stack flexDirection="row" alignItems="center">
                  Neue Kalkulation
                  <ChevronRight
                    sx={{
                      opacity: '0.2',
                      fontSize: '1em',
                      margin: '0 0 -0.2em 0.25rem'
                    }}
                  />
                </Stack>
              }
              prefixText="Erstellen Sie eine"
              color={theme.palette.common.white}
              light
            ></TextTeaserCard>
          </Grid>
        </Grid>
        <Dialog
          open={openSubBanner}
          onClose={handleCloseSub}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Ein neue Kalkulation können Sie nur mit gültigem Abonnement erstellen.</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSub}>schließen</Button>
            <Button component={Link} to="/office/billing" autoFocus>
              Abonnement verwalten
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={showDeleteFormDialog}
          onClose={() => setShowDeleteFormDialog(false)}
          aria-labelledby="alert-dialog-title-2"
          aria-describedby="alert-dialog-description-2"
        >
          <DialogTitle id="alert-dialog-title-2">Formular wirklisch löschen?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description-2">
              Wollen Sie das Formular entgültig löschen? Der Vorgang kann nicht rückgängig gemacht werden.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowDeleteFormDialog(false)}>schließen</Button>
            <Button onClick={() => removeForm(showDeleteFormDialog)} autoFocus>
              Formular löschen
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  return formCardsDom();
};

export default SelectFormView;
