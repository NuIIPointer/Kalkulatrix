import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Button, Divider } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

const Login = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Login</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthLogin />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1" align="center" sx={{ mt: 2, mb: 1.5 }}>
          Noch kein Profil?
        </Typography>
        <Button component={Link} to="/register" variant="outlined" color="primary" fullWidth size="large">
          Kostenlos registrieren
        </Button>
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Login;
