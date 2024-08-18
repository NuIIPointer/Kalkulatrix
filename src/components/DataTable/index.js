import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const DataTable = ({ data, columns }) => {
  const theme = useTheme();

  return (
    <DataGrid
      sx={{
        '& .MuiDataGrid-virtualScrollerRenderZone': {
          minWidth: '100%'
        },
        '& .MuiDataGrid-row': {
          borderRadius: theme.spacing(1.5),
          '&:nth-child(2n-1)': {
            backgroundColor: theme.palette.grey[100],
            '&:hover': {
              backgroundColor: theme.palette.grey[200]
            }
          }
        }
      }}
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 20
          }
        }
      }}
      getRowId={(row) => row.uid}
      rowSelection={false}
      columnSelection={false}
      disableColumnSelector
    />
  );
};

export default DataTable;
