import React, { useCallback, useEffect, useState } from "react";
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
  Table,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getUnits } from "../../redux/actions/units";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REQUEST_STATUS } from "../../helpers/constants/constants";

function Units() {
  const navigate = useNavigate();
  const [alignment, setAlignment] = useState("All");
  const [woodCost, setWoodCost] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [goldCost, setGoldCost] = useState(0);
  const [woodCheck, setWoodCheck] = useState(false);
  const [foodCheck, setFoodCheck] = useState(false);
  const [goldCheck, setGoldCheck] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units);
  const filterData = useCallback(() => {
    const rows = [];
    const ageFiltered = units.data.filter(
      (unit) => unit.age === alignment || alignment === "All"
    );
    if (!foodCheck && !goldCheck && !woodCheck) {
      ageFiltered.forEach((unit) => {
        rows.push(
          createData(
            unit.id,
            unit.name,
            unit.age,
            unit.cost !== null && unit.cost.Wood ? unit.cost.Wood : 0,
            unit.cost !== null && unit.cost.Food ? unit.cost.Food : 0,
            unit.cost !== null && unit.cost.Gold ? unit.cost.Gold : 0
          )
        );
      });
      setTableData(rows);
      return;
    }
    const costFiltered = ageFiltered.filter((unit) => unit.cost);
    const filteredData = costFiltered.filter(
      (unit) =>
        woodCheck === !!unit.cost.Wood &&
        (!woodCheck || unit.cost.Wood <= woodCost) &&
        foodCheck === !!unit.cost.Food &&
        (!foodCheck || unit.cost.Food <= foodCost) &&
        goldCheck === !!unit.cost.Gold &&
        (!goldCheck || unit.cost.Gold <= goldCost)
    );
    filteredData.forEach((unit) => {
      rows.push(
        createData(
          unit.id,
          unit.name,
          unit.age,
          unit.cost !== null && unit.cost.Wood ? unit.cost.Wood : 0,
          unit.cost !== null && unit.cost.Food ? unit.cost.Food : 0,
          unit.cost !== null && unit.cost.Gold ? unit.cost.Gold : 0
        )
      );
    });
    setTableData(rows);
  }, [
    alignment,
    woodCheck,
    woodCost,
    foodCheck,
    foodCost,
    goldCheck,
    goldCost,
    units,
  ]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setPage(0);
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

  useEffect(() => {
    if (!woodCheck) {
      setWoodCost(0);
    }
  }, [woodCheck]);
  useEffect(() => {
    if (!foodCheck) {
      setFoodCost(0);
    }
  }, [foodCheck]);
  useEffect(() => {
    if (!goldCheck) {
      setGoldCost(0);
    }
  }, [goldCheck]);

  useEffect(() => {
    filterData();
  }, [units, filterData]);

  function createData(id, name, age, wood, food, gold) {
    return { id, name, age, wood, food, gold };
  }

  return (
    <>
      {units.status === REQUEST_STATUS.PENDING && (
        <div>
          <CircularProgress color="inherit" />
        </div>
      )}
      {units.status === REQUEST_STATUS.SUCCESS && (
        <div className="units-container">
          <div className="units">
            <label htmlFor="ages">Ages</label>
            <div className="ages">
              <ToggleButtonGroup
                color="warning"
                style={{ backgroundColor: "#616161" }}
                value={alignment}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton value="All">All</ToggleButton>
                <ToggleButton value="Dark">Dark</ToggleButton>
                <ToggleButton value="Feudal">Feudal</ToggleButton>
                <ToggleButton value="Castle">Castle</ToggleButton>
                <ToggleButton value="Imperial">Imperial</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <label>Costs</label>
            <div className="costs">
              <Checkbox
                value={woodCheck}
                onChange={(e) => setWoodCheck(e.target.checked)}
              />
              <label htmlFor="wood" className="cost-labels">
                Wood
              </label>
              <Slider
                value={woodCost}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={0}
                max={200}
                onChange={(e) => setWoodCost(e.target.value)}
                disabled={woodCheck ? false : true}
              />
              <span className="cost-spans">{woodCost}</span>
            </div>
            <div className="costs">
              <Checkbox
                value={foodCheck}
                onChange={(e) => setFoodCheck(e.target.checked)}
              />
              <label htmlFor="food" className="cost-labels">
                Food
              </label>
              <Slider
                value={foodCost}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={0}
                max={200}
                onChange={(e) => setFoodCost(e.target.value)}
                disabled={foodCheck ? false : true}
              />
              <span className="cost-spans">{foodCost}</span>
            </div>
            <div className="costs">
              <Checkbox
                value={goldCheck}
                onChange={(e) => setGoldCheck(e.target.checked)}
              />
              <label htmlFor="gold" className="cost-labels">
                Gold
              </label>
              <Slider
                value={goldCost}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={0}
                max={200}
                onChange={(e) => setGoldCost(e.target.value)}
                disabled={goldCheck ? false : true}
              />
              <span className="cost-spans">{goldCost}</span>
            </div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="a dense table"
                size="small"
              >
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
                  {/*units.data.filter((unit) => { 
                if (unit.age === alignment || alignment === "All") { 
                  if(!woodCheck && !foodCheck && !goldCheck){ 
                    rows.push( 
                      createData( 
                        unit.id, 
                        unit.name, 
                        unit.age, 
                        JSON.stringify(unit.cost) 
                      ) 
                    ); 
                  } 
                  else if (unit.cost !== null) { 
                    if (((woodCheck === !!unit.cost.Wood) && (!woodCheck || unit.cost.Wood <= woodCost)) && 
                        ((foodCheck === !!unit.cost.Food) && (!foodCheck || unit.cost.Food <= foodCost)) && 
                        ((goldCheck === !!unit.cost.Gold) && (!goldCheck || unit.cost.Gold <= goldCost))) { 
                          rows.push( 
                            createData( 
                              unit.id, 
                              unit.name, 
                              unit.age, 
                              JSON.stringify(unit.cost) 
                            ) 
                          ); 
                    } 
                  } 
                   
                  if (unit.cost !== null) { 
                    if (!woodCheck && !foodCheck && !goldCheck) { 
                      rows.push( 
                        createData( 
                          unit.id, 
                          unit.name,
                          unit.age, 
                          JSON.stringify(unit.cost) 
                        ) 
                      ); 
                    } 
                    if ( 
                      woodCheck && 
                      !foodCheck && 
                      !goldCheck && 
                      unit.cost.Wood && 
                      !unit.cost.Food && 
                      !unit.cost.Gold && 
                      unit.cost.Wood < woodCost 
                    ) { 
                      rows.push( 
                        createData( 
                          unit.id, 
                          unit.name, 
                          unit.age, 
                          JSON.stringify(unit.cost) 
                        ) 
                      ); 
                    } else if ( 
                      foodCheck && 
                      !woodCheck && 
                      !goldCheck && 
                      unit.cost.Food && 
                      !unit.cost.Wood && 
                      !unit.cost.Gold && 
                      unit.cost.Food < foodCost 
                    ) { 
                      rows.push( 
                        createData( 
                          unit.id, 
                          unit.name, 
                          unit.age, 
                          JSON.stringify(unit.cost) 
                        ) 
                      ); 
                    } else if ( 
                      goldCheck && 
                      !woodCheck && 
                      !foodCheck && 
                      unit.cost.Gold && 
                      !unit.cost.Wood && 
                      !unit.cost.Food && 
                      unit.cost.Gold < goldCost 
                    ) { 
                      rows.push( 
                        createData( 
                          unit.id, 
                          unit.name, 
                          unit.age, 
                          JSON.stringify(unit.cost) 
                        ) 
                      ); 
                    } else if ( 
                      woodCheck && 
                      foodCheck && 
                      !goldCheck && 
                      unit.cost.Wood && 
                      unit.cost.Food && 
                      !unit.cost.Gold && 
                      unit.cost.Wood < woodCost && 
                      unit.cost.Food < foodCost 
                    ) { 
                      rows.push( 
                        createData( 
                          unit.id, 
                          unit.name, 
                          unit.age, 
                          JSON.stringify(unit.cost) 
                        ) 
                      ); 
                    } else if ( 
                      woodCheck && 
                      goldCheck && 
                      !foodCheck && 
                      unit.cost.Wood && 
                      unit.cost.Gold && 
                      !unit.cost.Food && 
                      unit.cost.Wood < woodCost && 
                      unit.cost.Gold < goldCost 
                    ) { 
                      rows.push( 
                        createData( 
                          unit.id, 
                          unit.name, 
                          unit.age, 
                          JSON.stringify(unit.cost) 
                        ) 
                      ); 
                    } else if ( 
                      foodCheck && 
                      goldCheck && 
                      !woodCheck && 
                      unit.cost.Food && 
                      unit.cost.Gold && 
                      !unit.cost.Wood && 
                      unit.cost.Food < foodCost && 
                      unit.cost.Gold < goldCost 
                    ) { 
                      rows.push( 
                        createData( 
                          unit.id, 
                          unit.name, 
                          unit.age, 
                          JSON.stringify(unit.cost) 
                        ) 
                      );
                    } 
                  } else { 
                    if (!woodCheck && !foodCheck && !goldCheck) { 
                      rows.push(createData(unit.id, unit.name, unit.age, "-")); 
                    } 
                  } 
                } 
              })*/}
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
          </div>
        </div>
      )}
    </>
  );
}

export default Units;
