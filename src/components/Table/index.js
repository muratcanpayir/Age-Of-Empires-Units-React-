import React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Table,
} from "@mui/material";

function Table({ tableData }) {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="a dense table" size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "700" }}>Id</TableCell>
              <TableCell align="right" style={{ fontWeight: "700" }}>
                Name
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "700" }}>
                Age
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "700" }}>
                Costs
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  onClick={() => {
                    navigate(`/details/${row.id}`);
                  }}
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">
                    Wood: {row.wood} Food: {row.food} Gold: {row.gold}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default Table;
