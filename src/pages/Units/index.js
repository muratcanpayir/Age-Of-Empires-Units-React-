import React, { useEffect, useState } from "react";
import "./Units.scss";
import {
  Slider,
  ToggleButtonGroup,
  ToggleButton,
  Checkbox,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getUnits } from "../../redux/actions/units";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

function Units() {
  const [alignment, setAlignment] = useState("all");
  const [woodCost, setWoodCost] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [goldCost, setGoldCost] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  useEffect(() => {
    dispatch(getUnits());
  }, [dispatch]);
  const units = useSelector((state) => state.units);
  console.log(units.data[0]);
  function createData(id, name, age, costs) {
    return { id, name, age, costs };
  }
  const rows=[];
  units.data.map((unit)=>{
    return rows.push(createData(unit.id,unit.name,unit.age,5));
  })
  return (
    <div className="units-container">
      <div className="units">
        <label>Ages</label>
        <div className="ages">
          <ToggleButtonGroup
            color="warning"
            style={{ backgroundColor: "#616161" }}
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="dark">Dark</ToggleButton>
            <ToggleButton value="feudal">Feudal</ToggleButton>
            <ToggleButton value="castle">Castle</ToggleButton>
            <ToggleButton value="imperial">Imperial</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <label>Costs</label>
        <div className="costs">
          <Checkbox />
          <label htmlFor="wood" className="cost-labels">
            Wood
          </label>
          <Slider
            defaultValue={woodCost}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => setWoodCost(e.target.value)}
          />
          <span className="cost-spans">{woodCost}</span>
        </div>
        <div className="costs">
          <Checkbox />
          <label htmlFor="food" className="cost-labels">
            Food
          </label>
          <Slider
            defaultValue={foodCost}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => setFoodCost(e.target.value)}
          />
          <span className="cost-spans">{foodCost}</span>
        </div>
        <div className="costs">
          <Checkbox />
          <label htmlFor="gold" className="cost-labels">
            Gold
          </label>
          <Slider
            defaultValue={goldCost}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e) => setGoldCost(e.target.value)}
          />
          <span className="cost-spans">{goldCost}</span>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Costs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.costs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

export default Units;
