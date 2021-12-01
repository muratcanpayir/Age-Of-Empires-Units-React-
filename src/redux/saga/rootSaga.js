import { takeEvery } from "redux-saga/effects";
import { GET_UNITS_SAGA } from "../constants/units";
import { GET_UNIT_DETAILS_SAGA } from "../constants/unitDetails";
import { handleGetUnits } from "./unitsSaga";
import { handleGetUnitDetails } from "./unitDetailsSaga";

export function* rootSaga() {
  yield takeEvery(GET_UNITS_SAGA, handleGetUnits);
  yield takeEvery(GET_UNIT_DETAILS_SAGA, handleGetUnitDetails);
}
