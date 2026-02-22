import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Button, Divider } from '@mui/material';

// project import
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';

// ================================|| REGISTER ||================================ //

const Register = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Registrieren</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <FirebaseRegister />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1" align="center" sx={{ mt: 2, mb: 1.5 }}>
          Bereits ein Profil?
        </Typography>
        <Button component={Link} to="/login" variant="outlined" color="primary" fullWidth size="large">
          Zum Login
        </Button>
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Register;
