import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { withStyles } from '@mui/material';
import axios from 'axios';
import MyButton from '../util/MyButton';

function createData(materialExactName, quantity, length, width, heigth, price, 
  sqftPerBox, quantityInBox, sqftPerTile, manufacturer, uniqueCode, userHandle, createdAt, materialId ) {
return {
materialExactName,
quantity,
length,
width,
heigth,
price,
sqftPerBox,
quantityInBox,
sqftPerTile,
manufacturer,
uniqueCode,
userHandle,
createdAt,
materialId
};
}

//Populating array of materials
let rows = [];
function populateRowsArray(data){
  rows=[];
  data.forEach(material => rows.push(createData(
    material.materialExactName,
    material.quantity,
    material.length,
    material.width,
    material.height,
    material.price,
    material.sqftPerBox,
    material.quantityInBox,
    material.sqftPerTile,
    material.manufacturer,
    material.uniqueCode,
    material.userHandle,
    material.createdAt,
    material.materialId
  )))

}

// function deleteRows(arrayOfRows){


// console.log(arrayOfRows);

//   // arrayOfRows.forEach(material=>(
//   //   axios.delete(`/material/${material}`)
//   //   .then(()=>{
//   //       window.location.reload();
//   //   })
//   //   .catch((err) => {
//   //       console.log(err.response.data);
//   //   })
//   //   ))

// }

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'materialExactName',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'quantity',
    numeric: true,
    disablePadding: false,
    label: 'Quantity',
  },
  {
    id: 'length',
    numeric: true,
    disablePadding: false,
    label: 'Length',
  },
  {
    id: 'width',
    numeric: true,
    disablePadding: false,
    label: 'Width',
  },
  {
    id: 'heigth',
    numeric: true,
    disablePadding: false,
    label: 'Heigth',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'sqftPerBox',
    numeric: true,
    disablePadding: false,
    label: 'SqFt Per Box',
  },
  {
    id: 'quantityInBox',
    numeric: true,
    disablePadding: false,
    label: 'Quantity In Box',
  },
  {
    id: 'sqftPerTile',
    numeric: true,
    disablePadding: false,
    label: 'SqFt Per Tile',
  },
  {
    id: 'manufacturer',
    numeric: true,
    disablePadding: false,
    label: 'Manufacturer',
  },
  {
    id: 'uniqueID',
    numeric: true,
    disablePadding: false,
    label: 'Unique ID',
  },
  {
    id: 'userHandle',
    numeric: true,
    disablePadding: false,
    label: 'Created by',
  },
  {
    id: 'createdAt',
    numeric: true,
    disablePadding: false,
    label: 'Created at',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all materials',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  const deleteRows = (arrayOfRows) => (event) => {
    event.preventDefault();
    console.log(arrayOfRows);

  arrayOfRows.forEach(material=>(
    axios.delete(`/material/${material}`)
    .then(()=>{
        window.location.reload();
        console.log("success");
    })
    .catch((err) => {
        console.log(err.response.data);
    })
    ))

  }
  

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Materials
        </Typography>
      )}

      {numSelected > 0 ? (
        // <Tooltip title="Delete">
        //   <IconButton onClick={deleteRows(props.rowsArray)}>
        //     <DeleteIcon />
        //   </IconButton>
        // </Tooltip>
        <MyButton tip="Delete" onClick={deleteRows(props.rowsArray)}>
          <DeleteIcon />
        </MyButton>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};


//Plan on how to delete selected rows
//1. HandleClick on delete icon
//1.5 Write axios func to delete a row
//2. selectedRows.map(delete each row using materialId)





// export default connect(mapStateToProps)(withStyles(styles)(Project));
export default function EnhancedTable(props) {
  // console.log(props.materials);
  populateRowsArray(props.materials);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.materialId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    
  return (
    <Box sx={{ width: '100%' }} style={{ width: 1200}}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} rowsArray={selected} />
        <TableContainer>
          <Table
            // style={{ width: 1900}}
            // sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.materialId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.materialId)} //maybe change here
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.materialId}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.materialExactName}
                      </TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.length}</TableCell>
                      <TableCell align="right">{row.width}</TableCell>
                      <TableCell align="right">{row.heigth}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.sqftPerBox}</TableCell>
                      <TableCell align="right">{row.quantityInBox}</TableCell>
                      <TableCell align="right">{row.sqftPerTile}</TableCell>
                      <TableCell align="right">{row.manufacturer}</TableCell>
                      <TableCell align="right">{row.uniqueCode}</TableCell>
                      <TableCell align="right">{row.userHandle}</TableCell>
                      <TableCell align="right">{row.createdAt.toString().substring(0,10)}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}

