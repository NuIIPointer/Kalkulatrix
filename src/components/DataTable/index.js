import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const DataTable = ({ data, columns, ...otherProps }) => {
  const theme = useTheme();

  return (
    <DataGrid
      sx={{
        // '& .MuiDataGrid-virtualScrollerRenderZone': {
        //   minWidth: '100%'
        // },
        '&.MuiDataGrid-root': {
          border: 'none'
        },
        '.MuiDataGrid-columnSeparator': {
          display: 'none'
        },
        '.MuiDataGrid-columnHeaders': {
          borderBottom: `2px solid`,
          borderColor: `${theme.palette.grey[300]} !important`,
          borderRadius: `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0`,

          '&:after': {
            display: 'none'
          },

          '& .MuiDataGrid-columnHeader': {
            backgroundColor: `${theme.palette.grey[300]} !important`
          }
        },
        '& .MuiDataGrid-row': {
          borderBottom: `2px solid`,
          borderColor: `${theme.palette.grey[300]} !important`,
          marginBottom: 0,
          marginTop: 0,
          borderTop: 'none',

          '&:nth-child(2n-1)': {
            '&:hover': {
              backgroundColor: theme.palette.grey[200]
            }
          }
        },

        '.MuiDataGrid-cell, .MuiDataGrid-columnHeader': {
          padding: {
            xs: `${theme.spacing(1)} ${theme.spacing(2)}`,
            sm: `${theme.spacing(1.5)} ${theme.spacing(2.5)}`,
            md: `${theme.spacing(2)} ${theme.spacing(3)}`
          },
          borderTop: 'none',
          borderBottom: 'none !important',
          '&:focus, &:focus-within': {
            outline: 'none'
          }
        },
        '.MuiDataGrid-footerContainer': {
          borderTop: 'none',
          padding: '0px !important'
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
      disableVirtualization={false}
      getRowHeight={() => 'auto'}
      {...otherProps}
    />
  );
};

export default DataTable;
