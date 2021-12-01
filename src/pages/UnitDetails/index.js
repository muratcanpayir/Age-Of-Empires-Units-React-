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
  CircularProgress,
} from "@mui/material";
import { REQUEST_STATUS } from "../../helpers/constants/constants";

function UnitDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUnitDetails(id));
  }, [dispatch, id]);
  const unitDetails = useSelector((state) => state.unitDetails);
  console.log(unitDetails.status);
  return (
    <div>
      {unitDetails.status === REQUEST_STATUS.PENDING && (
        <div>
          <CircularProgress color="inherit" />
        </div>
      )}
      {unitDetails.status === REQUEST_STATUS.SUCCESS &&
        Number(id) === unitDetails.data.id && (
          <div key={unitDetails.data.id} className="units">
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
                    <TableCell>{unitDetails.data.id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>Name</TableCell>
                    <TableCell>{unitDetails.data.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Description
                    </TableCell>
                    <TableCell>{unitDetails.data.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>Age</TableCell>
                    <TableCell>{unitDetails.data.age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Wood Cost
                    </TableCell>
                    <TableCell>
                      {unitDetails.data.cost !== null &&
                      unitDetails.data.cost.Wood
                        ? unitDetails.data.cost.Wood
                        : 0}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Food Cost
                    </TableCell>
                    <TableCell>
                      {unitDetails.data.cost !== null &&
                      unitDetails.data.cost.Food
                        ? unitDetails.data.cost.Food
                        : 0}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Gold Cost
                    </TableCell>
                    <TableCell>
                      {unitDetails.data.cost !== null &&
                      unitDetails.data.cost.Gold
                        ? unitDetails.data.cost.Gold
                        : 0}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Build Time
                    </TableCell>
                    <TableCell>{unitDetails.data.build_time}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Reload Time
                    </TableCell>
                    <TableCell>{unitDetails.data.reload_time}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Hit Points
                    </TableCell>
                    <TableCell>{unitDetails.data.hit_points}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>Attack</TableCell>
                    <TableCell>{unitDetails.data.attack}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "700" }}>
                      Accuracy
                    </TableCell>
                    <TableCell>{unitDetails.data.accuracy}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        )}
    </div>
  );
}

export default UnitDetails;
