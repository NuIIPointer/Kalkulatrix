import React, { useState, memo, useEffect } from 'react';

// material-ui
import {
  Grid,
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
  Modal,
  Popover,
  ButtonGroup
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';
import { Add, DeleteOutlineOutlined, InfoOutlined, EditOutlined, ContentCopy, DeleteOutlined, Save } from '@mui/icons-material';
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
import formattedNumber from 'utils/formUtils/formattedNumber';
import ModalHeader from 'components/ModalHeader/index';
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

const MemorizedTabData = memo(({ maTitle = 'Artikel', setModalData, outerIndex, innerIndex, errors }) => (
  <React.Fragment>
    <ModalHeader title={`${maTitle} bearbeiten`} onClose={() => setModalData(null)} />
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
              label="Einsatz"
              endAdornment="€"
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
              label="Zuschlagssatz"
              endAdornment="%"
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
                    label="Erlös"
                    endAdornment="€"
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
                    label="Davon Zuschlag"
                    endAdornment="€"
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
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => setModalData(null)} startIcon={<Save />}>
          schließen
        </Button>
      </Grid>
      <Grid item>
        {/* eslint-disable-next-line   */}
        {typeof errors.gk_deckung_zuschlaege?.[outerIndex]?.fields === 'string' ? (
          <Typography color="error">{errors.gk_deckung_zuschlaege[outerIndex].fields}</Typography>
        ) : null}
      </Grid>
    </Grid>
  </React.Fragment>
));

const MaterialzuschlagFremdleistungen = () => {
  const theme = useTheme();
  const { values, errors, isSubmitting, setFieldValue } = useFormikContext();
  const prevMaGroups = usePrevious(values.gk_deckung_zuschlaege);
  const [openedTab, setOpenedTab] = useState(0);
  const [modalData, setModalData] = useState(null);
  const [showAbteilungPopover, setShowAbteilungPopover] = useState(null);
  const [newAbteilungValue, setNewAbteilungValue] = useState(null);
  const [abteilungToEdit, setAbteilungToEdit] = useState(null);
  const [abteilungToEditTmpTitle, setAbteilungToEditTmpTitle] = useState(null);
  const [groupToDelete, setGroupToDelete] = useState(undefined);
  const [maToDelete, setMaToDelete] = useState(null);
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

  useEffect(() => {
    prevMaGroups?.forEach((prevMaGroup, index) => {
      const maGroup = values.gk_deckung_zuschlaege[index];
      if (maGroup && prevMaGroup?.fields && prevMaGroup?.fields?.length < maGroup.fields?.length) {
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
  }, [values.gk_deckung_zuschlaege, errors, prevMaGroups]);

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
              Neuen Artikel anlegen
            </Button>
          )}
        </Stack>
        <GridFooter />
      </GridFooterContainer>
    );
  };

  const groupValuesCombined = values.gk_deckung_zuschlaege?.reduce((acc, group) => {
    return {
      E8GruppeSumme: (acc.E8GruppeSumme || 0) + (group.E8GruppeSumme || 0),
      G8GruppeSumme: (acc.G8GruppeSumme || 0) + (group.G8GruppeSumme || 0),
      F8GruppeDurchschnitt: (acc.F8GruppeDurchschnitt || 0) + (group.F8GruppeDurchschnitt || 0),
      H8GruppeSumme: (acc.H8GruppeSumme || 0) + (group.H8GruppeSumme || 0)
    };
  }, 0);

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
            <ModalHeader title="Neue Gruppe anlegen" onClose={() => setNewAbteilungValue(false)} />
            <Grid container columnSpacing={2} alignItems="end">
              <Grid item xs={12} sm={12} md={8}>
                <CustomTextField
                  name="newAbteilungValue"
                  onChange={(e) => setNewAbteilungValue(e.target.value)}
                  value={newAbteilungValue}
                  label="Gruppenname"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setNewAbteilungValue(false);
                    setFieldValue(`gk_deckung_zuschlaege.${values.gk_deckung_zuschlaege?.length}.groupTitle`, newAbteilungValue);
                    changeTab(null, values.gk_deckung_zuschlaege?.length);
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
              title="Gruppe bearbeiten"
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
                    values.gk_deckung_zuschlaege?.[abteilungToEdit]?.groupTitle ||
                    `Gruppe ${abteilungToEdit + 1}`
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
                      setFieldValue(`gk_deckung_zuschlaege.${abteilungToEdit}.groupTitle`, abteilungToEditTmpTitle);
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
        <FieldArray name="gk_deckung_zuschlaege">
          {({ remove }) => (
            <>
              <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ mb: 2, mt: { xs: 4, sm: 6, md: 7, lg: 8 } }}>
                <TabList onChange={changeTab}>
                  {values.gk_deckung_zuschlaege?.map((category, index) => {
                    return (
                      <Tab
                        key={`${category.groupTitle}-${index}`}
                        label={
                          <Stack
                            sx={{
                              color: errors.pk_allgemein_mitarbeiter?.[index] ? theme.palette.error.main : undefined,
                              paddingRight: openedTab == index ? '8px' : '0',
                              '&:hover': { button: { opacity: '1' } }
                            }}
                            flexDirection="row"
                            alignItems="center"
                          >
                            {category.groupTitle || `Gruppe ${index + 1}`}
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
                      Pflegen Sie hier die Gruppen und Artikel, in die Sie Ihre Materialzuschläge und Fremdleistungen einteilen möchten.
                    </Typography>
                  </Popover>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setNewAbteilungValue(`Gruppe ${values.gk_deckung_zuschlaege?.length + 1}`);
                    }}
                    disabled={isSubmitting}
                    sx={{ fontWeight: 500, margin: 1, marginLeft: 'auto', mt: 0, mb: 0, height: 'auto' }}
                    startIcon={<Add />}
                  >
                    Neue Gruppe
                  </Button>
                </Stack>
              </Stack>
              {values.gk_deckung_zuschlaege?.map((outerField, outerIndex) => (
                <TabPanel key={outerIndex} value={outerIndex.toString()} sx={{ padding: 0 }}>
                  <LayoutBox sx={{ backgroundColor: theme.palette.common.white, padding: theme.shape.paddingBoxMedium }}>
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
                            setAbteilungToEdit(null);
                            changeTab(null, 0);
                            remove(outerIndex);
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
                        <StatCard
                          title="Einsatz"
                          value={`${formattedNumber(values.gk_deckung_zuschlaege[outerIndex].E8GruppeSumme, { decimals: 2 }) || 0}€`}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard
                          title="Erlöse"
                          value={`${formattedNumber(values.gk_deckung_zuschlaege[outerIndex].G8GruppeSumme, { decimals: 2 }) || 0}€`}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard
                          title="Marge"
                          value={`${formattedNumber(values.gk_deckung_zuschlaege[outerIndex].F8GruppeDurchschnitt, { decimals: 2 }) || 0}%`}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={3}>
                        <StatCard
                          title="Gewinn"
                          value={`${formattedNumber(values.gk_deckung_zuschlaege[outerIndex].H8GruppeSumme, { decimals: 2 }) || 0}€`}
                        />
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
                            groupName: outerField.groupTitle || `Gruppe ${outerIndex + 1}`,
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
                              data={tableData?.filter((el) => !!el.itemId)}
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
                    <Grid item xs={6} sm={6} md={3}>
                      <StatCard title="Einsatz" value={`${formattedNumber(groupValuesCombined.E8GruppeSumme, { decimals: 2 }) || 0}€`} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                      <StatCard title="Erlöse" value={`${formattedNumber(groupValuesCombined.G8GruppeSumme, { decimals: 2 }) || 0}€`} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                      <StatCard
                        title="Marge"
                        value={`${formattedNumber(groupValuesCombined.F8GruppeDurchschnitt, { decimals: 2 }) || 0}€`}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                      <StatCard title="Gewinn" value={`${formattedNumber(groupValuesCombined.H8GruppeSumme, { decimals: 2 }) || 0}€`} />
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

export default MaterialzuschlagFremdleistungen;
