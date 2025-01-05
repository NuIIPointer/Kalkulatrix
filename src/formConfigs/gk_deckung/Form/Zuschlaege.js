import React, { useState, memo } from 'react';

// material-ui
import {
  Grid,
  Divider,
  Button,
  Typography,
  Tab,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Checkbox,
  Modal
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';
import { DeleteOutlineOutlined, Close, EditOutlined, ContentCopy, DeleteOutlined, Save } from '@mui/icons-material';
import DataTable from 'components/DataTable/index';
import { GridFooterContainer, GridFooter } from '@mui/x-data-grid';

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import formFloat from 'utils/formUtils/formFloat';
import { getInitialGemeinkostenItem } from '../getInitialGemeinkostenData';
import LayoutBox from 'components/LayoutBox/index';
import StatCard from 'components/StatCard/index';
import InitialsCircle from 'components/InitialsCircle/index';
import CustomTextField from 'components/CustomTextField/index';

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
          params.row.onRowCheck?.(params.row.itemId);
        }}
      />
    )
  },
  {
    field: 'name',
    headerName: 'Produkt',
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
    field: 'einsatz',
    headerName: 'Einsatz',
    width: 135
  },
  {
    field: 'erloes',
    headerName: 'Erlös',
    width: 120
  },
  {
    field: 'marge',
    headerName: 'Marge',
    width: 90
  },
  {
    field: 'gewinn',
    headerName: 'Gewinn',
    width: 140
  },
  {
    field: 'actionsDom',
    headerName: '',
    width: 160,
    renderCell: (params) => params.value
  }
];

const MemorizedTabData = memo(({ maTitle, setModalData, outerIndex, innerIndex }) => (
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
      <Grid item xs={12} sm={6}>
        <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.D8`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Bezeichnung"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              sx={{ mb: 2 }}
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={6}>
        &nbsp;
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.E8`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Einsatz  (in EUR)"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              sx={{ mb: 2 }}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.F8`}>
          {({ field, meta }) => (
            <CustomTextField
              {...field}
              label="Zuschlagssatz (in %)"
              error={meta?.touched && Boolean(meta.error)}
              helperText={meta?.touched && meta.error}
              sx={{ mb: 2 }}
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="100"
            />
          )}
        </FastField>
      </Grid>
      <Grid item xs={12}>
        <ReadOnlyBox alwaysOpen>
          <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
            <Grid item xs={12} sm={6}>
              <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.G8`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Erlös (in EUR)"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.H8`}>
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Davon Zuschlag (in EUR)"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
          </Grid>
        </ReadOnlyBox>
      </Grid>
      <Grid item xs={12}>
        &nbsp;
      </Grid>
    </Grid>
  </React.Fragment>
));

const MaterialzuschlagFremdleistungen = () => {
  const theme = useTheme();
  const { values, errors, isSubmitting, setFieldValue } = useFormikContext();
  const [openedTab, setOpenedTab] = useState(0);
  const [modalData, setModalData] = useState(null);
  const [groupToDelete, setGroupToDelete] = useState(undefined);
  const [checkedRows, setCheckedRows] = useState([]);
  const onRowCheck = (itemId) => {
    setCheckedRows((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((row) => row !== itemId);
      }
      return [...prev, itemId];
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
            <Button variant="contained" color="primary" size="small" onClick={onCreate} disabled={isSubmitting}>
              Neuen Artikel anlegen
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
        <FieldArray name="gk_deckung_zuschlaege">
          {({ push, remove }) => (
            <>
              <Stack direction="row" flexWrap="wrap" mt={{ xs: 2, sm: 3, borderBottom: `1px solid ${theme.palette.primary.main}` }}>
                <TabList onChange={changeTab}>
                  {values.gk_deckung_zuschlaege?.map((category, index) => {
                    return (
                      <Tab
                        key={`${category.groupTitle}-${index}`}
                        label={
                          <Stack sx={{ color: errors.gk_deckung_zuschlaege?.[index] ? theme.palette.error.main : undefined }}>
                            {category.groupTitle || `Gruppe ${index + 1}`}
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
                    push({ categoryId: uuid(), fields: [getInitialGemeinkostenItem()] });
                    changeTab(null, values.gk_deckung_zuschlaege?.length);
                  }}
                  disabled={isSubmitting}
                  sx={{ fontWeight: 500 }}
                >
                  Neue Gruppe
                </Button>
              </Stack>
              {values.gk_deckung_zuschlaege?.map((outerField, outerIndex) => (
                <TabPanel key={outerIndex} value={outerIndex.toString()} sx={{ padding: 0, marginTop: 3, mb: { xs: 3, md: 4, lg: 5 } }}>
                  <LayoutBox sx={{ backgroundColor: theme.palette.common.white, padding: theme.shape.paddingBoxMedium }}>
                    <Grid container columnSpacing={2} alignItems="end">
                      <Grid item xs={12} sm={5} md={4}>
                        <FastField name={`gk_deckung_zuschlaege.${openedTab}.groupTitle`}>
                          {({ field, meta }) => (
                            <CustomTextField
                              {...field}
                              label="Gruppenbezeichnung"
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
                          Gruppe löschen
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
                        <DialogContentText id="alert-dialog-description">Wollen Sie diese Gruppe wirklich löschen?</DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setGroupToDelete(undefined)}>Abbrechen</Button>
                        <Button
                          onClick={() => {
                            setGroupToDelete(undefined);
                            remove(outerIndex);
                            changeTab(null, 0);
                          }}
                          autoFocus
                        >
                          Ja, löschen
                        </Button>
                      </DialogActions>
                    </Dialog>{' '}
                    <Grid
                      container
                      columnSpacing={{ xs: 1, sm: 2 }}
                      rowSpacing={{ xs: 1, sm: 2 }}
                      alignItems="end"
                      sx={{ mb: 3, alignItems: 'stretch' }}
                    >
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard title="Einsatz" value={`${formFloat(values.gk_deckung_zuschlaege[outerIndex].E8GruppeSumme, 0) || 0}€`} />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard title="Erlöse" value={`${formFloat(values.gk_deckung_zuschlaege[outerIndex].G8GruppeSumme, 0) || 0}€`} />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard
                          title="Marge"
                          value={`${formFloat(values.gk_deckung_zuschlaege[outerIndex].F8GruppeDurchschnitt, 1) || 0}%`}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard title="Gewinn" value={`${formFloat(values.gk_deckung_zuschlaege[outerIndex].H8GruppeSumme, 0) || 0}€`} />
                      </Grid>
                    </Grid>
                    <FieldArray name={`gk_deckung_zuschlaege.${outerIndex}.fields`}>
                      {({ push: innerPush, remove: innerRemove }) => {
                        const maFields = values.gk_deckung_zuschlaege?.[outerIndex]?.fields;
                        const tableData = maFields?.map((innerField, innerIndex) => {
                          const maTitle = innerField?.D8 || 'Artikel';
                          const itemId = innerField.itemId || innerField.itemid;
                          const maGroupsWithErrors = errors.gk_deckung_zuschlaege?.[outerIndex];
                          const groupErrors =
                            maGroupsWithErrors?.fields &&
                            Object.keys(maGroupsWithErrors.fields).filter((fieldKey) => !!maGroupsWithErrors.fields[fieldKey]);
                          const maHasError = maGroupsWithErrors ? groupErrors?.includes(innerIndex.toString()) : false;

                          return {
                            uid: itemId,
                            itemId: itemId,
                            onRowCheck,
                            checked: checkedRows.includes(itemId),
                            name: maTitle,
                            groupName: outerField.groupTitle || `Abteilung ${outerIndex + 1}`,
                            einsatz: `${formFloat(innerField.E8 || 0, 2).replace('.', ',')}€`,
                            marge: `${formFloat(innerField.F8 || 0, 2).replace('.', ',')}%`,
                            erloes: `${formFloat(innerField.G8 || 0, 2).replace('.', ',')}€`,
                            gewinn: `${formFloat(innerField.H8 || 0, 2).replace('.', ',')}€`,
                            // anwesenheitsentgelt: `${formFloat(innerField.S9 || 0, 2).replace('.', ',')}€`,
                            // krankenzeit: `${innerField.G9 || 0} Stunden`,
                            // newField: innerField.newField,
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
                                      ...values.gk_deckung_zuschlaege?.[outerIndex]?.fields?.[innerIndex],
                                      itemId: uuid()
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
                            const rows = values.gk_deckung_zuschlaege?.[outerIndex]?.fields;
                            const rowToCopy = rows?.findIndex((r) => row === r.itemId);
                            innerPush({
                              ...rows[rowToCopy],
                              itemId: uuid()
                            });
                            setCheckedRows([]);
                          });
                        };
                        const onDelete = () => {
                          const rowIndexesToDelete = checkedRows.map((row) => {
                            const rows = values.gk_deckung_zuschlaege?.[outerIndex]?.fields;
                            const rowToDelete = rows?.findIndex((r) => row === r.itemId);
                            return rowToDelete;
                          });
                          const newRows = values.gk_deckung_zuschlaege?.[outerIndex]?.fields.filter(
                            (row, index) => !rowIndexesToDelete.includes(index)
                          );
                          setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.fields`, newRows);
                          setCheckedRows([]);
                        };
                        const onCreate = () => {
                          innerPush(getInitialGemeinkostenItem(values));
                        };

                        return (
                          <LayoutBox sx={{ overflow: 'hidden', borderRadius: theme.spacing(2), width: '100%', maxWidth: '100%' }}>
                            <DataTable
                              data={tableData.filter((el) => !!el.itemId)}
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
            </>
          )}
        </FieldArray>
      </TabContext>
    </>
  );
};

export default MaterialzuschlagFremdleistungen;
