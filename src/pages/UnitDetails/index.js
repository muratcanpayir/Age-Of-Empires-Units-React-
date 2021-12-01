import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUnitDetails } from "../../redux/actions/unitDetails";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
} from "@mui/material";

function UnitDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUnitDetails(id));
  }, [dispatch,id]);
  const unitDetails = useSelector((state) => state.unitDetails);
  return (
    <div>
      {unitDetails.data.map(
        (unit) =>
          Number(id) === unit.id && (
            <div key={unit.id} className="units">
              <label
                htmlFor="unit-details"
                style={{ fontSize: "24px", marginBottom: "10px" }}
              >
                Unit Details
              </label>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>ID</TableCell>
                      <TableCell>{unit.id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>Name</TableCell>
                      <TableCell>{unit.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Description
                      </TableCell>
                      <TableCell>{unit.description}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>Age</TableCell>
                      <TableCell>{unit.age}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Wood Cost
                      </TableCell>
                      <TableCell>
                        {unit.cost !== null && unit.cost.Wood
                          ? unit.cost.Wood
                          : 0}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Food Cost
                      </TableCell>
                      <TableCell>
                        {unit.cost !== null && unit.cost.Food
                          ? unit.cost.Food
                          : 0}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Gold Cost
                      </TableCell>
                      <TableCell>
                        {unit.cost !== null && unit.cost.Gold
                          ? unit.cost.Gold
                          : 0}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Build Time
                      </TableCell>
                      <TableCell>{unit.build_time}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Reload Time
                      </TableCell>
                      <TableCell>{unit.reload_time}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Hit Points
                      </TableCell>
                      <TableCell>{unit.hit_points}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Attack
                      </TableCell>
                      <TableCell>{unit.attack}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "700" }}>
                        Accuracy
                      </TableCell>
                      <TableCell>{unit.accuracy}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </div>
          )
      )}
    </div>
  );
}

export default UnitDetails;
