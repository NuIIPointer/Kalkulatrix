import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// project import
import { UserContext } from 'context/user';
import FullPageLoader from 'components/FullPageLoader/index';
import useFormLiteral from './useFormLiteral';
import { Formik, Form } from 'formik';
import { getInitialGemeinkostenCategory } from 'formConfigs/gk_deckung/getInitialGemeinkostenData';
import ButtonBar from 'components/formComponents/ButtonBar/index';
import dayjs from 'dayjs';

// ==============================|| SAMPLE PAGE ||============================== //

const FormComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const formLiteral = useFormLiteral();
  const { activeFormId, activeFormData, setActiveFormId } = useContext(UserContext);
  const { formId, formSection } = useParams();

  const initialValues = {
    formTitle: activeFormData?.title,
    deckungsbeitraege_J25: undefined,
    pk_allgemein_K6: 5175,
    pk_allgemein_K7: undefined,
    pk_allgemein_K78: undefined,
    annahmen_allgemein_planjahr: undefined,
    annahmen_E41: 19.33,
    annahmen_G16: undefined,
    annahmen_G17_days: [1, 2, 3, 4, 5],
    gemeinkosten_material_F9: undefined,
    gemeinkosten_material_G9: undefined,
    gemeinkosten_material_F10: undefined,
    gemeinkosten_material_G10: undefined,
    gemeinkosten_material_F11: undefined,
    gemeinkosten_material_G11: undefined,
    gemeinkosten_personal_G15: undefined,
    gemeinkosten_personal_G16: undefined,
    gemeinkosten_personal_F17: undefined,
    gemeinkosten_personal_G17: undefined,
    gemeinkosten_I51: undefined,
    pk_allgemein_mitarbeiter: [],
    pk_produktiv_mitarbeiter: [],
    gk_deckung_zuschlaege: activeFormData?.values.gk_deckung_zuschlaege || [getInitialGemeinkostenCategory()],
    ...(activeFormData?.values || {}),
    letzteAenderung: activeFormData?.values?.lastChanged
  };

  useEffect(() => {
    if (!formId) {
      navigate('/');
    } else {
      if (formId !== activeFormId) {
        setActiveFormId(formId);
      }
    }
  }, [activeFormId, formId, setActiveFormId, navigate]);

  const formContents = useMemo(
    () =>
      Object.entries(formLiteral).map(([key, value]) => {
        if (key !== formSection) {
          return value.calucationUpdater;
        }

        return (
          <Box key={key} sx={{ minHeight: 'calc(100vh - 550px)' }}>
            {/* <Typography variant="h5" sx={{ mb: 5, mt: -3 }}>
              Letzte Änderung: {dayjs(activeFormData?.values?.lastChanged).format('DD.MM.YYYY')}
            </Typography> */}
            {value.content}
            {value.calucationUpdater}
          </Box>
        );
      }),
    [formLiteral, formSection]
  );

  const activeFormConfig = useMemo(() => {
    if (activeFormData) {
      return formLiteral[formSection] || 'Es ist ein Fehler aufgetreten.';
    }

    return null;
  }, [activeFormData, formLiteral, formSection]);

  if (!activeFormConfig) {
    return <FullPageLoader />;
  }

  return formContents ? (
    <Formik
      key={activeFormData?.title}
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={activeFormConfig.validationSchema}
      validateOnChange
      validateOnSubmit
    >
      {() => (
        <Form autoComplete="off">
          {formContents}
          <ButtonBar />
        </Form>
      )}
    </Formik>
  ) : (
    <FullPageLoader />
  );
};

export default FormComponent;
