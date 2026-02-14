import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
  Button,
  CircularProgress,
  Collapse
} from '@mui/material';
import { UserContext } from 'context/user/index';
import LayoutBox from 'components/LayoutBox/index';
import { useSnackbar } from 'notistack';

const AdminAccessSettings = () => {
  const theme = useTheme();
  const { user, formsData, updateAdminAccess } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const [enabled, setEnabled] = useState(false);
  const [scope, setScope] = useState('all');
  const [allowedFormIds, setAllowedFormIds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.adminAccess) {
      setEnabled(!!user.adminAccess.enabled);
      setScope(user.adminAccess.scope || 'all');
      setAllowedFormIds(user.adminAccess.allowedFormIds || []);
    }
  }, [user.adminAccess]);

  const handleFormToggle = useCallback((formId) => {
    setAllowedFormIds((prev) => (prev.includes(formId) ? prev.filter((id) => id !== formId) : [...prev, formId]));
  }, []);

  const handleSave = useCallback(async () => {
    setLoading(true);
    const isSuccessful = await updateAdminAccess({
      enabled,
      scope,
      allowedFormIds: scope === 'selected' ? allowedFormIds : []
    });
    setLoading(false);

    if (isSuccessful) {
      enqueueSnackbar('Admin-Zugriff erfolgreich aktualisiert.', { variant: 'success' });
    } else {
      enqueueSnackbar('Die Einstellungen konnten nicht gespeichert werden.', { variant: 'error' });
    }
  }, [enabled, scope, allowedFormIds, updateAdminAccess, enqueueSnackbar]);

  const formEntries = Object.entries(formsData || {});

  return (
    <LayoutBox
      sx={{
        backgroundColor: theme.palette.common.white,
        padding: theme.shape.paddingBoxMedium,
        mb: 2
      }}
    >
      <Typography variant="h2" sx={{ mb: 1 }}>
        Admin-Zugriff
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Erlauben Sie dem Kalkulatrix-Team Einsicht in Ihre Kalkulationen, um Sie besser beraten zu können.
      </Typography>

      <FormControlLabel
        control={<Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} color="primary" />}
        label="Admin-Zugriff erlauben"
        sx={{ mb: 1 }}
      />

      <Collapse in={enabled}>
        <RadioGroup value={scope} onChange={(e) => setScope(e.target.value)} sx={{ ml: 2, mb: 2 }}>
          <FormControlLabel value="all" control={<Radio color="primary" />} label="Alle Kalkulationen freigeben" />
          <FormControlLabel value="selected" control={<Radio color="primary" />} label="Nur ausgewählte Kalkulationen freigeben" />
        </RadioGroup>

        <Collapse in={scope === 'selected'}>
          <Stack sx={{ ml: 4, mb: 2 }}>
            {formEntries.length > 0 ? (
              formEntries.map(([formId, form]) => (
                <FormControlLabel
                  key={formId}
                  control={<Checkbox checked={allowedFormIds.includes(formId)} onChange={() => handleFormToggle(formId)} color="primary" />}
                  label={form.title || formId}
                />
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                Keine Kalkulationen vorhanden.
              </Typography>
            )}
          </Stack>
        </Collapse>
      </Collapse>

      <Stack justifyContent="flex-end" direction="row">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={loading}
          disableElevation
          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
        >
          Speichern
        </Button>
      </Stack>
    </LayoutBox>
  );
};

export default AdminAccessSettings;
