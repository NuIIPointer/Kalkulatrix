import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import { AdminContext } from 'context/admin/index';
import { Box, Button, Stack, Modal, Typography } from '@mui/material';
import useFormLiteral from 'pages/form/useFormLiteral';
import DataTable from 'components/DataTable/index';

const AdminDashboard = () => {
  const theme = useTheme();
  const { clientsData } = useContext(AdminContext);
  const [modalData, setModalData] = useState(null);
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;
  const formLiteral = useFormLiteral();

  const columns = [
    {
      field: 'firstName',
      headerName: 'Vorname',
      width: 150
    },
    {
      field: 'lastName',
      headerName: 'Nachname',
      width: 150
    },
    {
      field: 'company',
      headerName: 'Firma',
      width: 250
    },
    {
      field: 'usersFormData',
      headerName: 'Formulare',
      width: 'auto',
      renderCell: (params) => (
        <Stack gap={2} direction="row" justifyContent="flex-start" alignItems="center" sx={{ height: '100%' }}>
          {params.value?.map((formData, key) => (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => setModalData({ formData: formData, rowData: params.row })}
              key={FormData.id}
            >
              {formData.title}
              {console.log('params', params)}
            </Button>
          ))}
        </Stack>
      )
    }
  ];

  return (
    <>
      <ColoredSection bgGradient={headerBgColor} bgColor={theme.palette.secondary.dark} headline={'Admin Dashboard'} />
      {clientsData && (
        <Box sx={{ overflow: 'hidden', borderRadius: theme.shape.borderRadiusBox, backgroundColor: '#ffffff', padding: 2 }}>
          <DataTable data={clientsData} columns={columns} />
          <Modal
            open={!!modalData?.formData}
            onClose={() => setModalData(null)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1000px',
                maxWidth: '90vw',
                borderRadius: theme.shape.borderRadiusBox,
                backgroundColor: theme.palette.common.white,
                padding: 3
              }}
            >
              <Typography variant="h2" color="primary" sx={{ mb: 1 }}>
                Blatt wählen
              </Typography>
              <Typography variant="body2" sx={{ mb: 0, lineHeight: 1.2 }}>
                Formular von: {modalData?.rowData?.firstName} {modalData?.rowData?.lastName}
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.2 }}>
                Formulartitel: {modalData?.formData?.title}
              </Typography>
              <Stack gap={2} direction="row" flexWrap="wrap">
                {Object.keys(formLiteral).map((key) => {
                  const stepConfig = formLiteral[key];

                  return (
                    <Button
                      variant="contained"
                      color="primary"
                      key={stepConfig.linkPart}
                      href={`/office/form/${modalData?.formData?.id}/${stepConfig.linkPart}`}
                      sx={{ flexBasis: '23%', flexGrow: 1 }}
                    >
                      {stepConfig.title}
                    </Button>
                  );
                })}
              </Stack>
            </Box>
          </Modal>
        </Box>
      )}
    </>
  );
};

export default AdminDashboard;
