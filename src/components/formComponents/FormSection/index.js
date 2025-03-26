import LayoutBox from 'components/LayoutBox/index';
import {
  Typography,
  Stack,
  Button,
  Collapse,
  useTheme,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  ButtonGroup,
  Box
} from '@mui/material/index';
import { DeleteOutlineOutlined, NoteAddOutlined, EditOutlined, ClearOutlined } from '@mui/icons-material';
import { useMemo, useRef, useState, useContext } from 'react';
import { useFormikContext } from 'formik';
import DisabledPattern from 'components/DisabledPattern/index';
import { StripeContext } from 'context/stripe/index';

const FormSection = ({
  children,
  title,
  description,
  onAdd,
  onDelete,
  defaultOpen,
  collapsable = true,
  backgroundColor,
  border,
  isError,
  forceShowError,
  headlineVariant = 'h2',
  small,
  onlyPremium
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const { errors, touched } = useFormikContext();
  const { hasActiveSubscription } = useContext(StripeContext);
  const sectionRef = useRef(null);
  const disabledByPremium = onlyPremium && !hasActiveSubscription;

  const hasErrorField = useMemo(() => {
    if (sectionRef.current) {
      const inputFields = sectionRef.current.querySelectorAll('input, textarea, select, .isInvalidCustom');

      if (inputFields?.length > 0) {
        const inputNames = Array.from(inputFields).map((field) => field.getAttribute('name') || field.getAttribute('id'));
        const hasError = Object.keys(errors).find((key) => errors[key] && inputNames.includes(key));

        return !!hasError;
      }
    }

    return false;
  }, [errors]);

  const hasTouchedField = useMemo(() => {
    if (sectionRef.current) {
      const inputFields = sectionRef.current.querySelectorAll('input, textarea, select, .isInvalidCustom');

      if (inputFields?.length > 0) {
        const inputNames = Array.from(inputFields).map((field) => field.getAttribute('name') || field.getAttribute('id'));
        const hasError = Object.keys(touched).find((key) => touched[key] && inputNames.includes(key));

        return !!hasError;
      }
    }

    return false;
  }, [touched]);

  const showErrorStatus = (hasTouchedField || forceShowError) && (hasErrorField || isError);

  const buttonStyles = {
    aspectRatio: '1/1',
    padding: theme.spacing(1.25)
  };

  return (
    <div ref={sectionRef}>
      <LayoutBox
        sx={{
          backgroundColor: backgroundColor || theme.palette.common.white,
          border: showErrorStatus ? `2px solid ${theme.palette.error.main}` : border,
          padding: small ? theme.shape.paddingBoxSmall : theme.shape.paddingBoxMedium,
          mb: { xs: theme.spacing(1.5), md: theme.spacing(1.75), lg: theme.spacing(2) },
          overflow: 'hidden',
          position: disabledByPremium ? 'relative' : undefined
        }}
      >
        {disabledByPremium && (
          <DisabledPattern sx={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', zIndex: '1' }} />
        )}
        <Stack gap={{ xs: 1, sm: 2 }} direction="row" justifyContent="space-between" flexWrap="nowrap" alignItems="flex-start">
          <Stack flexGrow="1">
            <Typography variant={headlineVariant} sx={{ flexGrow: 1, color: showErrorStatus ? theme.palette.error.main : undefined }}>
              {title}
            </Typography>
            {showErrorStatus && (
              <Typography variant="text" sx={{ mr: 'auto', mt: 1, color: theme.palette.error.main }}>
                In dieser Gruppe gibt es Fehlerhafte Angaben.
              </Typography>
            )}
            {description && (
              <Typography variant="text" component="div" sx={{ mr: 'auto', mt: 1 }}>
                {description}
              </Typography>
            )}
            {disabledByPremium && (
              <Box
                variant="text"
                component="div"
                sx={{
                  mr: 'auto',
                  mt: 1,
                  px: 2,
                  py: 1.5,
                  backgroundColor: theme.palette.grey[600],
                  color: theme.palette.common.white,
                  borderRadius: 2,
                  position: 'relative',
                  zIndex: 2
                }}
              >
                Dieser Bereich kann nur mit aktivem Abonnement bearbeitet werden.
              </Box>
            )}
          </Stack>
          {(onDelete || onAdd || collapsable) && (
            <ButtonGroup color="primary" variant="outlined">
              {onDelete ? (
                <Button color="error" sx={{ ...buttonStyles }} onClick={() => setOpenPopup(true)}>
                  <DeleteOutlineOutlined />
                </Button>
              ) : (
                ''
              )}
              {onAdd ? (
                <Button color="success" sx={{ ...buttonStyles }} onClick={onAdd}>
                  <NoteAddOutlined />
                </Button>
              ) : (
                ''
              )}
              {collapsable ? (
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ ...buttonStyles }}
                  onClick={() => setIsOpen(!isOpen)}
                  disabled={disabledByPremium}
                >
                  {isOpen ? <ClearOutlined /> : <EditOutlined />}
                </Button>
              ) : (
                ''
              )}
            </ButtonGroup>
          )}
        </Stack>
        {!disabledByPremium && (collapsable ? <Collapse in={isOpen}>{children}</Collapse> : children)}
      </LayoutBox>
      <Dialog
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Wollen Sie diesen Abschnitt wirklich löschen?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPopup(false)}>Abbrechen</Button>
          <Button onClick={onDelete} autoFocus>
            Ja, löschen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormSection;
