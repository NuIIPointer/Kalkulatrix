import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import { UserContext } from 'context/user';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';
import FullPageLoader from 'components/FullPageLoader/index';
import useFormLiteral from './useFormLiteral';

// ==============================|| SAMPLE PAGE ||============================== //

const FormComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const formLiteral = useFormLiteral();
  const { activeFormId, activeFormData, setActiveFormId } = useContext(UserContext);
  const { formId, formSection } = useParams();

  useEffect(() => {
    if (!formId) {
      navigate('/');
    } else {
      if (formId !== activeFormId) {
        setActiveFormId(formId);
      }
    }
  }, [activeFormId, formId, setActiveFormId, navigate]);

  const activeFormConfig = useMemo(() => {
    if (activeFormData) {
      return formLiteral[formSection] || 'Es ist ein Fehler aufgetreten.';
    }

    return null;
  }, [activeFormData, formLiteral, formSection]);

  if (!activeFormConfig) {
    return <FullPageLoader />;
  }

  return (
    <Box mb={theme.shape.layoutDesignGutterReset}>
      <ColoredSection backLink="/office/form/overview" bgColor={theme.palette.primary[200]} headline={activeFormConfig.title} />
      {Object.entries(formLiteral).map(([key, value]) => {
        if (key !== formSection) {
          return (
            <Box key={key} display="none">
              {value.content}
            </Box>
          );
        }

        return (
          <Box key={key} sx={{ 'form>div:nth-last-child(2)': { minHeight: '50vh' } }}>
            {value.content}
          </Box>
        );
      })}
    </Box>
  );
};

export default FormComponent;
