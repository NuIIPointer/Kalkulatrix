import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { AdminContext } from 'context/admin/index';
import { Box, Button, Stack, Modal, Typography } from '@mui/material';
import useFormLiteral from 'pages/form/useFormLiteral';
import DataTable from 'components/DataTable/index';
import LayoutBox from 'components/LayoutBox/index';

const AdminDashboard = () => {
  const theme = useTheme();
  const { clientsData } = useContext(AdminContext);
  const [modalData, setModalData] = useState(null);
  const formLiteral = useFormLiteral();

  const columns = [
    {
      field: 'firstName',
      headerName: 'Vorname',
      width: 200
    },
    {
      field: 'lastName',
      headerName: 'Nachname',
      width: 200
    },
    {
      field: 'company',
      headerName: 'Firma',
      width: 250
    },
    {
      field: 'usersFormData',
      headerName: 'Formulare',
      width: 450,
      renderCell: (params) => (
        <Stack gap={2} direction="row" justifyContent="flex-start" alignItems="center" flexWrap="wrap" sx={{ height: '100%' }}>
          {params.value?.map((formData, key) => (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => setModalData({ formData: formData, rowData: params.row })}
              key={FormData.id}
            >
              {formData.title}
            </Button>
          ))}
        </Stack>
      )
    }
  ];

  return (
    <>
      {/* <ColoredSection bgGradient={headerBgColor} bgColor={theme.palette.secondary.dark} headline={'Admin Dashboard'} /> */}
      {clientsData && (
        <LayoutBox sx={{ padding: { xs: 2, sm: 3, md: 4 }, backgroundColor: '#fff' }}>
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
        </LayoutBox>
      )}
    </>
  );
};

export default AdminDashboard;
