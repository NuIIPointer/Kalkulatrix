import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import FirebaseForgotPassword from './auth-forms/AuthForgotPassword';
import AuthWrapper from './AuthWrapper';

// ================================|| ForgotPassword ||================================ //

const ForgotPassword = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Passwort zurücksetzen</Typography>
          <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Zurück zum Login
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <FirebaseForgotPassword />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default ForgotPassword;
