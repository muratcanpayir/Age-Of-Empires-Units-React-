import { takeEvery } from "redux-saga/effects";
import { GET_UNITS_SAGA } from "../constants/units";
import { handleGetUnits } from "./unitsSaga";

export function* rootSaga() {
  yield takeEvery(GET_UNITS_SAGA, handleGetUnits);
}
