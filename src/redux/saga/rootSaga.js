import { takeLatest } from "redux-saga/effects";
import { getUnits } from "../actions/units";
import { GET_UNITS_SUCCESS } from "../constants/units";

import { handleGetUnits } from "./unitsSaga";

export function* rootSaga(){
  yield takeLatest(GET_UNITS_SUCCESS,handleGetUnits);
}