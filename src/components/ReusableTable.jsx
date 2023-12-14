import React, { useState } from "react";
import { data, columns } from "./data";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TablePagination,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import {
  Search,
  FilterList,
} from "@material-ui/icons";
import { Stack } from "@mui/material";

// ReusableTable Component
const ReusableTable = () => {
  // State variables to manage table functionality
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page
  const [sortColumn, setSortColumn] = useState(""); // Column to be sorted
  const [sortDirection, setSortDirection] = useState("asc"); // Sorting direction
  const [searchText, setSearchText] = useState(""); // Search text
  const [anchorEl, setAnchorEl] = useState(null); // Menu anchor element
  const [hiddenColumns, setHiddenColumns] = useState([]); // Hidden columns

  // Function to handle column sorting
  const handleSort = (columnId) => {
    setSortColumn(columnId);
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Function to toggle visibility of columns in the menu
  const handleToggleColumn = (columnId) => {
    setHiddenColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((col) => col !== columnId)
        : [...prev, columnId]
    );
  };

  // Function to handle menu click
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to handle page change in pagination
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Function to handle rows per page change in pagination
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter data based on search text
  const filteredData = data.filter((row) =>
    columns.some((col) =>
      row[col.id].toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Sort data based on the selected column and direction
  const sortedData = sortColumn
    ? [...filteredData].sort((a, b) =>
        sortDirection === "asc"
          ? a[sortColumn] > b[sortColumn]
            ? 1
            : -1
          : b[sortColumn] > a[sortColumn]
          ? 1
          : -1
      )
    : filteredData;

  // Filter visible columns based on hidden columns
  const visibleColumns = columns.filter(
    (col) => !hiddenColumns.includes(col.id)
  );

  // JSX structure for the ReusableTable component
  return (
    <Stack>
      {/* Search and Filter Section */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#bbdefb",
        }}
      >
        {/* Search TextField */}
        <TextField
          label="Search"
          value={searchText}
          onChange={handleSearch}
          InputProps={{ startAdornment: <Search /> }}
          sx={{ width: 500, border: 1 }}
        />
        {/* Filter Menu Button */}
        <IconButton onClick={handleMenuClick}>
          <FilterList />
        </IconButton>
      </Stack>

      {/* Filter Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {/* Menu Items for each Column */}
        {columns.map((col) => (
          <MenuItem key={col.id}>
            <Checkbox
              checked={!hiddenColumns.includes(col.id)}
              onChange={() => handleToggleColumn(col.id)}
            />
            {col.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Table Container */}
      <TableContainer component={Paper}>
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              {/* Table Header Cells */}
              {visibleColumns.map((col) => (
                <TableCell key={col.id} style={{ minWidth: col.minWidth }}>
                  {/* Sort Label for each Header Cell */}
                  <TableSortLabel
                    active={sortColumn === col.id}
                    direction={sortDirection}
                    onClick={() => handleSort(col.id)}
                  >
                    {col.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {/* Rows of Data */}
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name}>
                  {/* Cells of Data */}
                  {visibleColumns.map((col) => (
                    <TableCell key={col.id}>{row[col.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Table Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
      />
    </Stack>
  );
};

// Export the ReusableTable component
export default ReusableTable;
