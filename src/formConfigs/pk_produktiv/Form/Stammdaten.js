import React, { memo, useEffect, useState } from 'react';

// material-ui
import {
  Grid,
  Button,
  Typography,
  Stack,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Modal,
  IconButton,
  Checkbox,
  ButtonGroup,
  Popover
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Add, InfoOutlined, DeleteOutlineOutlined, EditOutlined, ContentCopy, DeleteOutlined, Save } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { GridFooterContainer, GridFooter } from '@mui/x-data-grid';

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import getInitialMitarbeiterData from '../getInitialMitarbeiterData';
import formFloat from 'utils/formUtils/formFloat';
import DataTable from 'components/DataTable/index';
import LayoutBox from 'components/LayoutBox/index';
import InitialsCircle from 'components/InitialsCircle/index';
import StatCard from 'components/StatCard/index';
import ModalHeader from 'components/ModalHeader/index';
import CustomTextField from 'components/CustomTextField/index';
import formattedNumber from 'utils/formUtils/formattedNumber';
import { usePrevious } from 'utils/usePrevious';

const columns = [
  {
    field: 'checked',
    headerName: '',
    width: 50,
    renderCell: (params) => (
      <Checkbox
        sx={{ padding: 0 }}
        type="checkbox"
        checked={params.row.checked}
        onChange={() => {
          params.row.onRowCheck?.(params.row.userId);
        }}
      />
    )
  },
  {
    field: 'name',
    headerName: 'Mitarbeiter',
    width: 240,
    renderCell: (params) => (
      <Stack flexDirection="row" gap={1.5}>
        <InitialsCircle
          name={params.value}
          sx={{ flexShrink: 0, border: params.row.hasError ? `1px solid ${params.row.theme?.palette?.error?.[500]}` : undefined }}
          fontSx={{ color: params.row.hasError ? params.row.theme?.palette?.error?.[500] : undefined }}
        />
        <Stack sx={{ color: params.row.hasError ? params.row.theme?.palette?.error?.[500] : undefined }}>
          <Typography variant="body1" fontWeight="bold" marginBottom={-0.5}>
            {params.value}
          </Typography>
          <Typography variant="body2" fontSize="0.8rem" color="currentColor" sx={{ opacity: 0.65 }}>
            {params.row.groupName}
          </Typography>
        </Stack>
      </Stack>
    )
  },
  {
    field: 'stundenlohn',
    headerName: 'Stundenlohn',
    width: 135
  },
  {
    field: 'auslastung',
    headerName: 'Auslastung',
    width: 120
  },
  {
    field: 'krankenzeit',
    headerName: 'Krankenzeit',
    width: 150
  },
  {
    field: 'anwesenheitsentgelt',
    headerName: 'Lohn (p.a).',
    width: 140
  },
  {
    field: 'actionsDom',
    headerName: '',
    width: 160,
    renderCell: (params) => params.value
  }
];

const MemorizedTabData = memo(({ maTitle = 'Mitarbeiter', setModalData, outerIndex, innerIndex, errors }) => (
  <React.Fragment>
    <ModalHeader title={`${maTitle} bearbeiten`} onClose={() => setModalData(null)} />
    <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.titel`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Name/Titel"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.E9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Sollarbeitsstunden p.a. (ohne Feiertage)"
              endAdornment="Stunden"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={12}>
        &nbsp;
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.F9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Urlaub"
              endAdornment="Stunden"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="8760"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.G9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Krankheit"
              endAdornment="Stunden"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="8760"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.H9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Fortbildung"
              endAdornment="Stunden"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="8760"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.I9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Sonstige Abwesenheiten"
              endAdornment="Stunden"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="8760"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12}>
        <ReadOnlyBox>
          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={6}>
              <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.M9`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    label="Anwesenheit"
                    endAdornment="Stunden"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                    sx={{ mb: 2 }}
                  />
                )}
              </FastField>
            </Grid>
          </Grid>
        </ReadOnlyBox>
      </Grid>
      <Grid item xs={12} sm={12}>
        &nbsp;
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.N9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Davon direkt verrechenbare Arbeitszeit (in %)"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="100"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12}>
        <ReadOnlyBox>
          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={6}>
              <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.O9`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Direkt verrechnet"
                    endAdornment="Stunden"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                    sx={{ mb: 2 }}
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.P9`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Nicht direkt verrechnet"
                    endAdornment="Stunden"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                    sx={{ mb: 2 }}
                  />
                )}
              </FastField>
            </Grid>
          </Grid>
        </ReadOnlyBox>
      </Grid>
      <Grid item xs={12} sm={12}>
        &nbsp;
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.Q9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Bruttostundenlohn"
              endAdornment="€"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.R9`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Zuschläge"
              endAdornment="€"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12}>
        <ReadOnlyBox alwaysOpen title={'Berechnet'}>
          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={6}>
              <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.S9`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    label="Anwesenheitsentgelt (gesamt)"
                    endAdornment="€"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    InputProps={{
                      readOnly: true
                    }}
                    value={formFloat(field.value, 2)}
                    type="number"
                    sx={{ mb: 2 }}
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.U9`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    label="Verrechenbarkeit (direkt verrechnet)"
                    endAdornment="€"
                    value={formFloat(field.value, 2)}
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                    sx={{ mb: 2 }}
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.V9`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    label="Verrechenbarkeit (nicht direkt verrechnet)"
                    endAdornment="€"
                    value={formFloat(field.value, 2)}
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                    sx={{ mb: 2 }}
                  />
                )}
              </FastField>
            </Grid>
          </Grid>
        </ReadOnlyBox>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => setModalData(null)} startIcon={<Save />}>
          speichern
        </Button>
      </Grid>
      <Grid item>
        {/* eslint-disable-next-line   */}
        {typeof errors.pk_produktiv_mitarbeiter?.[outerIndex]?.fields === 'string' ? (
          <Typography color="error">{errors.pk_produktiv_mitarbeiter[outerIndex].fields}</Typography>
        ) : null}
      </Grid>
    </Grid>
  </React.Fragment>
));

const Stammdaten = () => {
  const theme = useTheme();
  const { values, errors, isSubmitting, setFieldValue } = useFormikContext();
  const prevMaGroups = usePrevious(values.pk_produktiv_mitarbeiter);
  const [openedTab, setOpenedTab] = useState(0);
  const [modalData, setModalData] = useState(null);
  const [showAbteilungPopover, setShowAbteilungPopover] = useState(null);
  const [newAbteilungValue, setNewAbteilungValue] = useState(null);
  const [abteilungToEdit, setAbteilungToEdit] = useState(null);
  const [abteilungToEditTmpTitle, setAbteilungToEditTmpTitle] = useState(null);
  const [groupToDelete, setGroupToDelete] = useState(undefined);
  const [maToDelete, setMaToDelete] = useState(null);
  const [checkedRows, setCheckedRows] = useState([]);
  const onRowCheck = (userId) => {
    setCheckedRows((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((row) => row !== userId);
      }
      return [...prev, userId];
    });
  };

  const changeTab = (_event, newValue) => {
    setOpenedTab(newValue);
  };

  useEffect(() => {
    prevMaGroups?.forEach((prevMaGroup, index) => {
      const maGroup = values.pk_produktiv_mitarbeiter[index];
      if (maGroup && (prevMaGroup?.fields?.length || 0) < maGroup.fields?.length) {
        setModalData(
          <MemorizedTabData
            maTitle={maGroup.fields[maGroup.fields.length - 1].titel}
            setModalData={setModalData}
            outerIndex={index}
            innerIndex={maGroup.fields.length - 1}
            errors={errors}
          />
        );
      }
    });
  }, [values.pk_produktiv_mitarbeiter, errors, prevMaGroups]);

  const tableButtonStyles = {
    width: '28px',
    height: '28px',
    minWidth: '28px'
  };

  const CustomFooter = ({ onCopy, onDelete, onCreate }) => {
    return (
      <GridFooterContainer>
        <Stack flexDirection="row" gap={1} marginLeft={2}>
          {checkedRows?.length > 0 ? (
            <>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={onDelete}
                startIcon={<DeleteOutlined />}
                sx={{ paddingRight: { xs: 0.5, sm: 2 }, minWidth: 0 }}
              >
                <Stack sx={{ display: { xs: 'none', sm: 'inline-block' } }}>Löschen</Stack>
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={onCopy}
                startIcon={<Save />}
                sx={{ paddingRight: { xs: 0.5, sm: 2 }, minWidth: 0 }}
              >
                <Stack sx={{ display: { xs: 'none', sm: 'inline-block' } }}>Kopieren</Stack>
              </Button>
            </>
          ) : (
            <Button variant="contained" color="primary" size="small" onClick={onCreate} disabled={isSubmitting} startIcon={<Add />}>
              Neuen Mitarbeiter anlegen
            </Button>
          )}
        </Stack>
        <GridFooter />
      </GridFooterContainer>
    );
  };

  return (
    <>
      {modalData && (
        <Modal open={true} onClose={() => setModalData(null)}>
          <LayoutBox
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1000px',
              maxWidth: '90vw',
              maxHeight: '80vh',
              overflow: 'scroll',
              borderRadius: theme.shape.borderRadiusBox,
              backgroundColor: theme.palette.common.white,
              padding: 3
            }}
          >
            {modalData || ''}
          </LayoutBox>
        </Modal>
      )}
      {newAbteilungValue && (
        <Modal open={true} onClose={() => setNewAbteilungValue(false)}>
          <LayoutBox
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              maxWidth: '90vw',
              maxHeight: '80vh',
              overflow: 'scroll',
              borderRadius: theme.shape.borderRadiusBox,
              backgroundColor: theme.palette.common.white,
              padding: 3
            }}
          >
            <ModalHeader title="Neue Abteilung anlegen" onClose={() => setNewAbteilungValue(false)} />
            <Grid container columnSpacing={2} alignItems="end">
              <Grid item xs={12} sm={12} md={8}>
                <CustomTextField
                  name="newAbteilungValue"
                  onChange={(e) => setNewAbteilungValue(e.target.value)}
                  value={newAbteilungValue}
                  label="Abteilungsname"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setNewAbteilungValue(false);
                    setFieldValue(`pk_produktiv_mitarbeiter.${values.pk_produktiv_mitarbeiter?.length}.groupTitle`, newAbteilungValue);
                    changeTab(null, values.pk_produktiv_mitarbeiter?.length);
                  }}
                  sx={{ mb: 2 }}
                >
                  speichern
                </Button>
              </Grid>
            </Grid>
          </LayoutBox>
        </Modal>
      )}
      {abteilungToEdit !== null && (
        <Modal
          open={true}
          onClose={() => {
            setAbteilungToEdit(null);
            setAbteilungToEditTmpTitle(null);
          }}
        >
          <LayoutBox
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              maxWidth: '90vw',
              maxHeight: '80vh',
              overflow: 'scroll',
              borderRadius: theme.shape.borderRadiusBox,
              backgroundColor: theme.palette.common.white,
              padding: 3
            }}
          >
            <ModalHeader
              title="Abteilung bearbeiten"
              onClose={() => {
                setAbteilungToEdit(null);
                setAbteilungToEditTmpTitle(null);
              }}
            />
            <Grid container columnSpacing={2} alignItems="end">
              <Grid item xs={12} sm={12} md={6}>
                <CustomTextField
                  name="abteilungToEditTmpTitle"
                  onChange={(e) => setAbteilungToEditTmpTitle(e.target.value)}
                  value={
                    abteilungToEditTmpTitle ||
                    values.pk_produktiv_mitarbeiter?.[abteilungToEdit]?.groupTitle ||
                    `Abteilung ${abteilungToEdit + 1}`
                  }
                  label="Abteilungsname"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ButtonGroup>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setFieldValue(`pk_produktiv_mitarbeiter.${abteilungToEdit}.groupTitle`, abteilungToEditTmpTitle);
                      changeTab(null, abteilungToEdit);
                      setAbteilungToEditTmpTitle(null);
                      setAbteilungToEdit(null);
                    }}
                    sx={{ mb: 2 }}
                  >
                    speichern
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setGroupToDelete(abteilungToEdit)}
                    sx={{ mb: 2 }}
                    color="error"
                    startIcon={<DeleteOutlineOutlined />}
                  >
                    löschen
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </LayoutBox>
        </Modal>
      )}
      {maToDelete && (
        <Dialog
          open={!!maToDelete}
          onClose={() => setMaToDelete(null)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Mitarbeiter löschen</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Wollen Sie &quot;{maToDelete.maTitle}&quot; wirklich löschen?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setMaToDelete(null)}>Abbrechen</Button>
            <Button
              onClick={() => {
                maToDelete.innerRemove();
                setMaToDelete(null);
              }}
              autoFocus
            >
              Ja, löschen
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <TabContext value={openedTab.toString()}>
        <FieldArray name="pk_produktiv_mitarbeiter">
          {({ remove }) => (
            <>
              <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ mb: 2 }}>
                <TabList onChange={changeTab}>
                  {values.pk_produktiv_mitarbeiter?.map((category, index) => {
                    return (
                      <Tab
                        key={index}
                        label={
                          <Stack
                            sx={{
                              color: errors.pk_produktiv_mitarbeiter?.[index] ? theme.palette.error.main : undefined,
                              paddingRight: openedTab == index ? '8px' : '0',
                              '&:hover': { button: { opacity: '1' } }
                            }}
                            flexDirection="row"
                            alignItems="center"
                          >
                            {category.groupTitle || `Abteilung ${index + 1}`}
                            <IconButton
                              sx={{
                                padding: 0.5,
                                borderRadius: '10000px',
                                height: 'auto',
                                width: 'auto',
                                opacity: openedTab == index ? '1' : '0',
                                transition: '.25s',
                                position: 'absolute',
                                left: `calc(100% + ${openedTab == index ? 0 : 4}px)`,
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                              }}
                              onClick={() => setAbteilungToEdit(index)}
                            >
                              <EditOutlined fontSize="8" />
                            </IconButton>
                          </Stack>
                        }
                        value={index.toString()}
                      />
                    );
                  })}
                  <Tab key="gesamt" value="gesamt" label="Gesamt"></Tab>
                </TabList>
                <Stack flexDirection="row" gap={0.5} alignItems="center" marginLeft="auto">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => setShowAbteilungPopover(!showAbteilungPopover ? e.currentTarget : null)}
                    disabled={isSubmitting}
                    sx={{ fontWeight: 500, margin: 0, px: 0, minWidth: '44px', minHeight: '44px' }}
                  >
                    <InfoOutlined />
                  </Button>
                  <Popover
                    id={'abteilungenpopover'}
                    open={showAbteilungPopover}
                    anchorEl={showAbteilungPopover}
                    onClose={() => setShowAbteilungPopover(false)}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein. Sollten Sie mehrere Mitarbeiter mit gleicher Bezahlung,
                      Urlaubstagen und geschätzten Krankheitstagen haben, können Sie einen allgemeinen Mitarbeiter erstellen und angeben,
                      wie oft dieser berücksichtigt wird (Anzahl).
                    </Typography>
                  </Popover>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setNewAbteilungValue(`Abteilung ${values.pk_produktiv_mitarbeiter?.length + 1}`);
                    }}
                    disabled={isSubmitting}
                    sx={{ fontWeight: 500, margin: 1, marginLeft: 'auto', mt: 0, mb: 0, height: 'auto' }}
                    startIcon={<Add />}
                  >
                    Neue Abteilung
                  </Button>
                </Stack>
              </Stack>
              {values.pk_produktiv_mitarbeiter?.map((outerField, outerIndex) => (
                <TabPanel value={outerIndex.toString()} key={outerIndex} sx={{ padding: 0 }}>
                  <LayoutBox sx={{ backgroundColor: theme.palette.common.white, padding: theme.shape.paddingBoxMedium }}>
                    <Dialog
                      open={groupToDelete === outerIndex}
                      onClose={() => setGroupToDelete(undefined)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">{outerField.groupTitle}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">Wollen Sie diese Abteilung wirklich löschen?</DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setGroupToDelete(undefined)}>Abbrechen</Button>
                        <Button
                          onClick={() => {
                            changeTab(null, 0);
                            setAbteilungToEdit(null);
                            setGroupToDelete(undefined);
                            remove(outerIndex);
                          }}
                          autoFocus
                        >
                          Ja, löschen
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Grid
                      container
                      columnSpacing={{ xs: 1, sm: 2 }}
                      rowSpacing={{ xs: 1, sm: 2 }}
                      alignItems="end"
                      sx={{ mb: 3, alignItems: 'stretch' }}
                    >
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard title="Personalkosten" value={`${formattedNumber(outerField.S9_gesamt, { decimals: 2 }) || 0}€`} />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard title="Auslastung" value={`${formattedNumber(outerField.N9_durchschnitt, { decimals: 1 }) || 0}%`} />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard
                          title="Kosten je Stunde"
                          value={`${formattedNumber(outerField.Q9_durchschnitt, { decimals: 2 }) || 0}€`}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard title="Mitarbeiter" value={outerField.fields?.length || 0} />
                      </Grid>
                    </Grid>
                    <FieldArray name={`pk_produktiv_mitarbeiter.${outerIndex}.fields`}>
                      {({ push: innerPush, remove: innerRemove }) => {
                        const maFields = values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields;
                        const tableData = maFields?.map((innerField, innerIndex) => {
                          const maTitle = innerField?.titel || 'Mitarbeiter';
                          const userId = innerField.userId;
                          const maGroupsWithErrors = errors.pk_produktiv_mitarbeiter?.[outerIndex];
                          const groupErrors =
                            maGroupsWithErrors?.fields &&
                            Object.keys(maGroupsWithErrors.fields).filter((fieldKey) => !!maGroupsWithErrors.fields[fieldKey]);
                          const maHasError = maGroupsWithErrors ? groupErrors?.includes(innerIndex.toString()) : false;

                          return {
                            uid: userId,
                            userId: userId,
                            onRowCheck,
                            checked: checkedRows.includes(innerField.userId),
                            name: maTitle,
                            groupName: outerField.groupTitle || `Abteilung ${outerIndex + 1}`,
                            stundenlohn: `${formattedNumber(innerField.Q9 || 0, 2)}€`,
                            auslastung: `${formattedNumber(innerField.N9 || 0, 2)}%`,
                            anwesenheitsentgelt: `${formattedNumber(innerField.S9 || 0, 2)}€`,
                            krankenzeit: `${innerField.G9 || 0} Stunden`,
                            newField: innerField.newField,
                            hasError: maHasError,
                            theme,
                            actionsDom: (
                              <Stack flexDirection="row" gap={{ xs: 1, md: 1.5, lg: 2 }}>
                                <IconButton
                                  variant="outlined"
                                  color="secondary"
                                  onClick={() =>
                                    setModalData(
                                      <MemorizedTabData
                                        maTitle={maTitle}
                                        setModalData={setModalData}
                                        outerIndex={outerIndex}
                                        innerIndex={innerIndex}
                                        innerField={innerField}
                                        errors={errors}
                                      />
                                    )
                                  }
                                  sx={tableButtonStyles}
                                >
                                  <EditOutlined />
                                </IconButton>
                                <IconButton
                                  variant="outlined"
                                  color="secondary"
                                  onClick={() =>
                                    innerPush({
                                      ...values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields?.[innerIndex],
                                      userId: uuid()
                                    })
                                  }
                                  sx={tableButtonStyles}
                                >
                                  <ContentCopy />
                                </IconButton>
                                <IconButton
                                  variant="outlined"
                                  color="secondary"
                                  onClick={() => setMaToDelete({ maTitle, innerRemove: () => innerRemove(innerIndex) })}
                                  sx={tableButtonStyles}
                                >
                                  <DeleteOutlined />
                                </IconButton>
                              </Stack>
                            )
                          };
                        });

                        const onCopy = () => {
                          checkedRows.forEach((row) => {
                            const rows = values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields;
                            const rowToCopy = rows?.findIndex((r) => row === r.userId);
                            innerPush({
                              ...rows[rowToCopy],
                              userId: uuid()
                            });
                            setCheckedRows([]);
                          });
                        };
                        const onDelete = () => {
                          const rows = values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields;
                          const rowIndexesToDelete = checkedRows.map((row) => {
                            const rowToDelete = rows?.findIndex((r) => row === r.userId);
                            return rowToDelete;
                          });
                          const rowsToDelete = rowIndexesToDelete.map((index) => rows[index]);
                          const innerRemove = () => {
                            const newRows = values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields.filter(
                              (_row, index) => !rowIndexesToDelete.includes(index)
                            );
                            setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields`, newRows);
                            setCheckedRows([]);
                          };

                          setMaToDelete({ maTitle: rowsToDelete.map((ma) => ma.titel || 'Mitarbeiter').join(', '), innerRemove });
                        };
                        const onCreate = () => {
                          innerPush(getInitialMitarbeiterData(values));
                        };

                        return (
                          <LayoutBox sx={{ overflow: 'hidden', borderRadius: theme.spacing(2), width: '100%', maxWidth: '100%' }}>
                            <DataTable
                              data={tableData}
                              columns={columns}
                              slots={{
                                footer: CustomFooter
                              }}
                              slotProps={{
                                footer: { onCopy, onDelete, onCreate }
                              }}
                            />
                          </LayoutBox>
                        );
                      }}
                    </FieldArray>
                  </LayoutBox>
                </TabPanel>
              ))}
              <TabPanel value="gesamt" key="gesamt" sx={{ padding: 0 }}>
                <LayoutBox sx={{ backgroundColor: theme.palette.common.white, padding: theme.shape.paddingBoxMedium }}>
                  <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 2 }}
                    rowSpacing={{ xs: 1, sm: 2 }}
                    alignItems="end"
                    sx={{ mb: 0, alignItems: 'stretch' }}
                  >
                    <Grid item xs={6} sm={6} md={4}>
                      <StatCard title="Direkt verrechenbar" value={`${formattedNumber(values.pk_produktiv_P42, { decimals: 2 }) || 0}€`} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <StatCard
                        title="Nicht direkt verrechenbar"
                        value={`${formattedNumber(values.pk_produktiv_Q42, { decimals: 1 }) || 0}%`}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <StatCard title="Gesamtkosten (p.a.)" value={`${formattedNumber(values.pk_produktiv_S42, { decimals: 2 }) || 0}€`} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <StatCard
                        title="Ø Kosten je Std. (inkl. Zulagen/ Zuschläge)"
                        value={`${formattedNumber(values.pk_produktiv_R42, { decimals: 2 }) || 0}€`}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <StatCard title="Ø Auslastung" value={`${formattedNumber(values.pk_produktiv_auslastung, { decimals: 2 }) || 0}%`} />
                    </Grid>
                  </Grid>
                </LayoutBox>
              </TabPanel>
            </>
          )}
        </FieldArray>
      </TabContext>
    </>
  );
};

export default Stammdaten;
