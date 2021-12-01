import { call, put } from "@redux-saga/core/effects";
import axios from "axios";
import fakeData from "../../helpers/fakeAPI/age-of-empires-units.json";
import { GET_UNITS_SUCCESS } from "../constants/units";

function fetchUnits() { 
  try { 
    const data =axios.get("http://localhost:3000/units"); 
    return data; 
  } catch (error) { 
    console.log(error); 
  } 
}

export function* handleGetUnits() {
  const units = yield call(fetchUnits);
  yield put({ type: GET_UNITS_SUCCESS, units });
}
