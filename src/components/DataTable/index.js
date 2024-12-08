import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const DataTable = ({ data, columns, sx = {}, ...otherProps }) => {
  const theme = useTheme();

  return (
    <DataGrid
      sx={{
        ...sx,
        '&.MuiDataGrid-root': {
          border: 'none'
        },
        '.MuiDataGrid-overlayWrapper': {
          // display: 'none'
          minHeight: '75px',
          backgroundColor: `${theme.palette.secondary[300]} !important`
        },
        '.MuiDataGrid-columnSeparator': {
          display: 'none'
        },
        '.MuiDataGrid-columnHeaders': {
          borderBottom: `2px solid`,
          borderColor: `${theme.palette.secondary[300]} !important`,
          borderRadius: `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0`,

          '&:after': {
            display: 'none'
          },

          '.MuiDataGrid-columnHeader, .MuiDataGrid-columnHeaderRow, .MuiDataGrid-filler': {
            backgroundColor: `${theme.palette.secondary[300]} !important`,
            fontSize: '1rem',
            border: 0
          }
        },
        '& .MuiDataGrid-row': {
          borderBottom: `2px solid`,
          borderColor: `${theme.palette.secondary[300]} !important`,
          marginBottom: 0,
          marginTop: 0,
          borderTop: 'none',

          '&:hover': {
            backgroundColor: `${theme.palette.common.white} !important`
          }
        },

        '.MuiDataGrid-cell, .MuiDataGrid-columnHeader': {
          padding: {
            xs: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
            sm: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
            md: `${theme.spacing(1.5)} ${theme.spacing(2.5)}`
          },
          borderTop: 'none',
          borderBottom: 'none !important',
          '&:focus, &:focus-within': {
            outline: 'none'
          },
          display: 'flex',
          alignItems: 'center'
        },
        '.MuiDataGrid-footerContainer': {
          borderTop: 'none',
          padding: '0px !important'
        },
        '.MuiTablePagination-displayedRows': {
          margin: 0
        },
        '.MuiTablePagination-input': {
          width: 'auto'
        }
      }}
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 25
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
