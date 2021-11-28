import { call, put } from "@redux-saga/core/effects";
import fakeData from "../../helpers/fakeAPI/age-of-empires-units.json";
import { GET_UNITS_SUCCESS } from "../constants/units";

function fetchUnits() {
  const data = fakeData;
  return data;
}

export function* handleGetUnits() {
  const units = yield call(fetchUnits);
  yield put({ type: GET_UNITS_SUCCESS, units });
}
