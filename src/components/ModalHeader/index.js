import { Stack, Typography, IconButton, Grid, Divider } from '@mui/material';
import { Close } from '@mui/icons-material';

const ModalHeader = ({ title, onClose }) => {
  return (
    <>
      <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
        <Typography variant="h3">{title}</Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Stack>
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default ModalHeader;
