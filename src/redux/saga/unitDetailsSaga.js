import { call, put } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_UNIT_DETAILS_SUCCESS } from "../constants/unitDetails";

function fetchUnitDetails({id}) { 
  try { 
    const data =axios.get("http://localhost:3000/units/"+id); 
    return data; 
  } catch (error) { 
    console.log(error); 
  } 
}
export function* handleGetUnitDetails() {
  const units = yield call(fetchUnitDetails);
  yield put({ type: GET_UNIT_DETAILS_SUCCESS, units });
}
