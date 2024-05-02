import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import { AdminContext } from 'context/admin/index';
import { Box, Button, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const AdminDashboard = () => {
  const theme = useTheme();
  const { clientsData } = useContext(AdminContext);
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

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
      width: 400,
      renderCell: (params) => (
        <Stack gap={2} direction="row" justifyContent="flex-start" alignItems="center" sx={{ height: '100%' }}>
          {params.value?.map((formData, key) => (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => alert(JSON.stringify(formData.values))}
              key={FormData.id}
            >
              Formular {key + 1} einsehen
            </Button>
          ))}
        </Stack>
      )
    }
  ];

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={'AdminDashboard'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis."
      />
      {clientsData && (
        <Box sx={{ overflow: 'hidden', borderRadius: theme.shape.borderRadiusBox, backgroundColor: theme.palette.common.white }}>
          <DataGrid
            rows={clientsData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20
                }
              }
            }}
            getRowId={(row) => row.uid}
          />
        </Box>
      )}
    </>
  );
};

export default AdminDashboard;
