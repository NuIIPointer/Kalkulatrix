import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { StatusCodes } from 'http-status-codes';

// material-ui
import { Grid, Button, TextField, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// icons
import { Edit, ChevronRight } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

// redux
import { UserContext } from 'context/user';
import TextTeaserCard from 'components/TextTeaserCard/index';

const SelectFormView = () => {
  const { createForm, formsData, requestStatusCodes } = useContext(UserContext);
  const theme = useTheme();
  const [addNewTitle, setAddNewTitle] = useState('');
  const addForm = () => {
    setAddNewTitle('');
    createForm({ title: `Formular vom ${dayjs(new Date()).format('DD.MM.YYYY')}` });
  };
  const creationLoading = requestStatusCodes.loadingForm === StatusCodes.PROCESSING;

  const formCardsDom = () => {
    const formIds = Object.keys(formsData);
    const formCards =
      formIds.map((formId) => {
        const formData = formsData[formId];

        return (
          <Grid key={formId} item xs={12} sm={6}>
            <TextTeaserCard
              grow
              primaryText={
                <Stack
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                  component="span"
                >
                  {formData.title || 'Formular: ' + formData.id}
                  <Edit
                    sx={{
                      opacity: '0.2',
                      fontSize: 55,
                      margin: '0 -0.35em -0.35em'
                    }}
                  />
                </Stack>
              }
              prefixText={`zuletzt bearbeitet: ${dayjs(formData.creationDate).format('DD.MM.YYYY')}`}
              link={`/office/form/${formId}`}
              color={theme.palette.primary.light}
            />
          </Grid>
        );
      }) || [];

    return (
      <>
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing(3) }}>
          {formCards}
          <Grid item xs={12} sm={6}>
            <TextTeaserCard
              onClick={addForm}
              primaryText={
                <Stack flexDirection="row" alignItems="center">
                  Neues Formular <ChevronRight fontSize="large" />
                </Stack>
              }
              prefixText="Erstellen Sie ein"
              color={theme.palette.common.white}
              light
            >
              {/* <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    value={addNewTitle}
                    sx={{ width: '100%' }}
                    placeholder="Name des Formulars"
                    onChange={(e) => setAddNewTitle(e.target.value)}
                  />
                </Grid>
                <Grid item xs="auto">
                  <Button
                    disabled={!addNewTitle}
                    startIcon={creationLoading ? <CircularProgress size="1rem" /> : <ChevronRight />}
                    sx={{ height: '100%' }}
                    color="primary"
                    variant="contained"
                    onClick={() => addForm(addNewTitle)}
                  >
                    {creationLoading ? 'lädt' : 'erstellen'}
                  </Button>
                </Grid>
              </Grid> */}
            </TextTeaserCard>
          </Grid>
        </Grid>
      </>
    );
  };

  return <div>{formCardsDom()}</div>;
};

export default SelectFormView;
