import React, { useState } from 'react';
import { Grid, Typography, Stack, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '@mui/material/styles';

import macbookImage from 'assets/images/content/macbook_mockup_dashboard_2.png';

const SectionHeadlineText = () => {
  const theme = useTheme();
  const [popupOpen, setPopupOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email submission logic
    console.log('Email submitted:', email);
    handlePopupClose();
    setEmail('');
  };

  return (
    <>
      <Grid container justifyContent="space-between" sx={{ overflow: 'hidden' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              pl: { xs: 4, md: 10, lg: 20, xl: 30 },
              pr: { xs: 4, md: 0 },
              py: { xs: 6, md: 20, lg: 25 }
            }}
          >
            <Typography variant="h1" sx={{ mb: 1, fontWeight: 700, fontSize: { xs: 24, sm: 32, md: 48, lg: 64 } }}>
              Kalkulatrix
            </Typography>
            <Typography variant="h2" component="p" sx={{ fontWeight: 500, fontSize: { xs: 18, sm: 24, md: 28, lg: 36 }, minHeight: '3em' }}>
              <TypeAnimation
                sequence={[
                  'Optimieren Sie Stundensätze.',
                  1000,
                  'Optimieren Sie Personalkosten.',
                  1000,
                  'Optimieren Sie den Preis für Ihre Kunden.',
                  1000,
                  'Optimieren Sie Ihren Gewinn.',
                  2000
                ]}
                wrapper="span"
                speed={75}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </Typography>
            <Typography variant="body2" sx={{ mb: { xs: 2, md: 5, lg: 6 }, fontSize: { xs: 16, sm: 18, md: 22 } }}>
              Der Konkurrenz einen Schritt voraus. Berechnen Sie präzise Stundensätze und senken Sie Mitarbeiterkosten. Steigern Sie
              Effizienz, maximieren Sie Gewinne. Einfache Anwendung - sofortige Ergebnisse.
            </Typography>
            <Stack gap={2} sx={{ flexDirection: 'row' }}>
              <Button variant="contained" color="primary" onClick={handlePopupOpen}>
                Kostenlos testen
              </Button>
            </Stack>
          </Box>
        </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock: { xs: 4, sm: 6, md: 8, lg: 0 } }}
      >
        <Box
          as="img"
          src={macbookImage}
          alt="Bildschirmfoto der Stundensatzkalkulation"
          sx={{ width: '100%', maxWidth: { xs: '700px', lg: '100%' }, padding: { md: 6 } }}
        />
      </Grid>
    </Grid>

      {/* Popup für kostenlose Ersterfassung */}
      <Dialog
        open={popupOpen}
        onClose={handlePopupClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: theme.shape.borderRadiusBox,
            p: { xs: 1, sm: 2 }
          }
        }}
      >
        <DialogTitle sx={{ pr: 6, fontWeight: 700, fontSize: { xs: 18, sm: 22, md: 26 }, color: theme.palette.primary.main }}>
          Kostenlose Stundensatz-Ersterfassung zum Start
          <IconButton
            aria-label="close"
            onClick={handlePopupClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: theme.palette.grey[500] }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Zum Start von Adel Consulting übernehmen wir für Ihren Betrieb die{' '}
            <strong>vollständige Ersterfassung des Stundensatzes kostenfrei</strong>!
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Geschäftliche E-Mail-Adresse"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth size="large">
              Kostenlose Ersterfassung sichern
            </Button>
          </form>
          <Typography variant="body2" sx={{ mt: 2, color: theme.palette.grey[600], textAlign: 'center', fontSize: 12 }}>
            Die Aktion ist zeitlich begrenzt und richtet sich an Unternehmen mit ernsthaftem Interesse an einer fundierten
            Stundensatzkalkulation.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SectionHeadlineText;
