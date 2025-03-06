import React from 'react';
import { Grid, Box } from '@mui/material';

const SectionAnmeldung = () => {
  return (
    <>
      <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }} id="webinarDemo">
        <Grid item xs={12} sx={{ marginBlock: { xs: 4, sm: 6, md: 8, lg: 0 } }}>
          <Box
            as="iframe"
            src="https://adel-consulting.com/webinar-kalkulatrix/"
            width="100%"
            height={{ xs: 1210, sm: 660 }}
            sx={{
              border: 0,
              width: '100%',
              overflow: 'auto',
              mt: { xs: 0, sm: 2, md: 4, lg: 6 },
              px: { xs: 2, sm: 2, md: 4, lg: 6 }
            }}
            title="Zum Kalkulatrix-Webinar anmelden"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SectionAnmeldung;
