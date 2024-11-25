import React, { memo, useState } from 'react';

// material-ui
import {
  Grid,
  TextField,
  Divider,
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
  Alert,
  IconButton,
  Checkbox
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DeleteOutlineOutlined, EditOutlined, ContentCopy, DeleteOutlined, Close, Save } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { GridFooterContainer, GridFooter } from '@mui/x-data-grid';

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import getInitialMitarbeiterData from '../getInitialMitarbeiterData';
import formFloat from 'utils/formUtils/formFloat';
import DataTable from 'components/DataTable/index';
import LayoutBox from 'components/LayoutBox/index';
import InitialsCircle from 'components/InitialsCircle/index';

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
        <InitialsCircle name={params.value} sx={{ flexShrink: 0 }} />
        <Stack>
          <Typography variant="body1" fontWeight="bold" marginBottom={-0.5}>
            {params.value}
          </Typography>
          <Typography variant="body2" fontSize="0.8rem" color="textSecondary">
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
    field: 'anwesenheitsentgelt',
    headerName: 'Anwesenheitsentgeld',
    width: 200
  },
  {
    field: 'actionsDom',
    headerName: '',
    width: 160,
    renderCell: (params) => params.value
  }
];

const MemorizedTabData = memo(({ maTitle, setModalData, outerIndex, innerIndex, errors }) => (
  <React.Fragment>
    <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
      <Typography variant="h3">{maTitle} bearbeiten</Typography>
      <IconButton onClick={() => setModalData(null)}>
        <Close />
      </IconButton>
    </Stack>
    <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
      <Grid item xs={12}>
        <Divider sx={{ mt: 2, mb: 4 }} />
      </Grid>
    </Grid>
    <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
      <>
        <Grid item xs={12} sm={6}>
          <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.titel`}>
            {({ field, meta }) => (
              <TextField
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
              <TextField
                {...field}
                label="Sollarbeitsstunden p.a. (ohne Feiertage)"
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
              <TextField
                {...field}
                label="Urlaub (in Stunden)"
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
              <TextField
                {...field}
                label="Krankheit (in Stunden)"
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
              <TextField
                {...field}
                label="Fortbildung (in Stunden)"
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
              <TextField
                {...field}
                label="Sonstige Abwesenheiten (in Stunden)"
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
                    <TextField
                      {...field}
                      label="Anwesenheit (in Std.)"
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
              <TextField
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
                    <TextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Direkt verrechnet (in Std.)"
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
                    <TextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Nicht direkt verrechnet (in Std.)"
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
              <TextField
                {...field}
                label="Bruttostundenlohn (in EUR)"
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
              <TextField
                {...field}
                label="Zuschläge (in EUR)"
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
                    <TextField
                      {...field}
                      label="Anwesenheitsentgelt (gesamt, in EUR)"
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
                    <TextField
                      {...field}
                      label="Verrechenbarkeit (direkt verrechnet, in EUR)"
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
                    <TextField
                      {...field}
                      label="Verrechenbarkeit (nicht direkt verrechnet, in EUR)"
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
      </>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => setModalData(null)} startIcon={<Save />}>
          schließen
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
  const [openedTab, setOpenedTab] = useState(0);
  const [modalData, setModalData] = useState(null);
  const [groupToDelete, setGroupToDelete] = useState(undefined);
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

  const tableButtonStyles = {
    width: '28px',
    height: '28px',
    minWidth: '28px'
  };

  const CustomFooter = ({ onCopy, onDelete }) => {
    return (
      <GridFooterContainer>
        {checkedRows?.length > 0 ? (
          <Stack flexDirection="row" gap={1} marginLeft={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={onDelete}
              startIcon={<DeleteOutlined />}
              sx={{ paddingRight: { xs: 0.5, sm: 2 }, minWidth: 0 }}
            >
              <Stack sx={{ display: { xs: 'none', sm: 'inline-block' } }}>Löschen</Stack>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onCopy}
              startIcon={<Save />}
              sx={{ paddingRight: { xs: 0.5, sm: 2 }, minWidth: 0 }}
            >
              <Stack sx={{ display: { xs: 'none', sm: 'inline-block' } }}>Kopieren</Stack>
            </Button>
          </Stack>
        ) : (
          <span />
        )}
        <GridFooter />
      </GridFooterContainer>
    );
  };

  return (
    <FormSection
      collapsable={true}
      title="Eingabe Produktive Lohnkosten"
      description="Bitte legen Sie ihre Abteilungen bzw. Unternehmensbereiche an. Folgend können sie die Mitarbeiter für die einzelnen Abteilungen erfassen."
      defaultOpen
    >
      {modalData && (
        <Modal open={!!modalData} onClose={() => setModalData(null)}>
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
      <TabContext value={openedTab.toString()}>
        <FieldArray name="pk_produktiv_mitarbeiter">
          {({ push, remove }) => (
            <>
              <Stack direction="row" flexWrap="wrap" mt={{ xs: 2, sm: 3, borderBottom: `1px solid ${theme.palette.primary.main}` }}>
                <TabList onChange={changeTab}>
                  {values.pk_produktiv_mitarbeiter?.map((category, index) => {
                    return (
                      <Tab
                        key={index}
                        label={
                          <Stack sx={{ color: errors.pk_produktiv_mitarbeiter?.[index] ? theme.palette.error.main : undefined }}>
                            {category.groupTitle || `Abteilung ${index + 1}`}
                          </Stack>
                        }
                        value={index.toString()}
                      />
                    );
                  })}
                </TabList>
                <Button
                  variant="text"
                  onClick={() => {
                    push({ categoryId: uuid(), fields: [getInitialMitarbeiterData(values)] });
                    changeTab(null, values.pk_produktiv_mitarbeiter?.length);
                  }}
                  disabled={isSubmitting}
                  sx={{ fontWeight: 500 }}
                >
                  Neue Abteilung
                </Button>
              </Stack>
              {values.pk_produktiv_mitarbeiter?.map((outerField, outerIndex) => (
                <TabPanel key={outerIndex} value={outerIndex.toString()} sx={{ padding: 0, marginTop: 3 }}>
                  <Grid container columnSpacing={2} alignItems="end">
                    <Grid item xs={12} sm={5} md={4}>
                      <FastField name={`pk_produktiv_mitarbeiter.${openedTab}.groupTitle`}>
                        {({ field, meta }) => (
                          <TextField
                            {...field}
                            label="Abteilungsname"
                            error={meta?.touched && Boolean(meta.error)}
                            helperText={meta?.touched && meta.error}
                            sx={{ mb: 3 }}
                          />
                        )}
                      </FastField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="outlined"
                        onClick={() => setGroupToDelete(outerIndex)}
                        disabled={isSubmitting}
                        sx={{ mb: 3 }}
                        color="error"
                        startIcon={<DeleteOutlineOutlined />}
                      >
                        Abteilung löschen
                      </Button>
                    </Grid>
                  </Grid>
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
                          remove(outerIndex);
                          changeTab(null, 0);
                          setGroupToDelete(undefined);
                        }}
                        autoFocus
                      >
                        Ja, löschen
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <FieldArray name={`pk_produktiv_mitarbeiter.${outerIndex}.fields`}>
                    {({ push: innerPush, remove: innerRemove }) => {
                      const maFields = values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields;
                      const tableData = maFields?.map((innerField, innerIndex) => {
                        const maTitle = innerField?.titel || 'Mitarbeiter';
                        const uuid = innerField.userId;

                        return {
                          uid: uuid,
                          userId: uuid,
                          onRowCheck,
                          checked: checkedRows.includes(innerField.userId),
                          name: maTitle,
                          groupName: outerField.groupTitle || outerIndex + 1,
                          stundenlohn: `${formFloat(innerField.Q9 || 0, 2).replace('.', ',')}€`,
                          auslastung: `${formFloat(innerField.N9 || 0, 2).replace('.', ',')}%`,
                          anwesenheitsentgelt: `${formFloat(innerField.S9 || 0, 2).replace('.', ',')}€`,
                          newField: innerField.newField, // Add the new field here
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
                                onClick={() => innerRemove(innerIndex)}
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
                        const rowIndexesToDelete = checkedRows.map((row) => {
                          const rows = values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields;
                          const rowToDelete = rows?.findIndex((r) => row === r.userId);
                          return rowToDelete;
                        });
                        const newRows = values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields.filter(
                          (row, index) => !rowIndexesToDelete.includes(index)
                        );
                        setFieldValue(`pk_produktiv_mitarbeiter.${outerIndex}.fields`, newRows);
                        setCheckedRows([]);
                      };

                      return (
                        <>
                          <p>
                            Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein. Sollten Sie mehrere Mitarbeiter mit gleicher
                            Bezahlung, Urlaubstagen und geschätzten Krankheitstagen haben, können Sie einen allgemeinen Mitarbeiter
                            erstellen und angeben, wie oft dieser berücksichtigt wird (Anzahl).
                          </p>
                          <LayoutBox sx={{ overflow: 'hidden', borderRadius: theme.spacing(2), width: '100%', maxWidth: '100%' }}>
                            {maFields?.length > 0 ? (
                              <DataTable
                                data={tableData}
                                columns={columns}
                                slots={{
                                  footer: CustomFooter
                                }}
                                slotProps={{
                                  footer: { onCopy, onDelete }
                                }}
                              />
                            ) : (
                              <Alert severity="info">Noch keine Mitarbeiter vorhanden</Alert>
                            )}
                          </LayoutBox>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => innerPush(getInitialMitarbeiterData(values))}
                            disabled={isSubmitting}
                            sx={{ mt: 2, mb: 4, ml: 'auto', display: 'block' }}
                          >
                            Neuen Mitarbeiter anlegen
                          </Button>
                          <ReadOnlyBox title={' '} alwaysOpen>
                            <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                              <Grid item xs={12} sm={6}>
                                <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.S9_gesamt`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      value={formFloat(field.value, 2)}
                                      label={`Gesamtkosten Abteilung "${outerField.groupTitle || outerIndex + 1}" (in EUR)`}
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
                        </>
                      );
                    }}
                  </FieldArray>
                </TabPanel>
              ))}
            </>
          )}
        </FieldArray>
      </TabContext>
    </FormSection>
  );
};

export default Stammdaten;
