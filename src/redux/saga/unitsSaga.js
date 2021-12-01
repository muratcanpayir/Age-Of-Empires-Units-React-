import { call, put } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_UNITS_PENDING, GET_UNITS_SUCCESS } from "../constants/units";

function fetchUnits() {
  try {
    const data = axios.get("https://sore-marbled-grapple.glitch.me/units");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetUnits() {
  const units = yield call(fetchUnits);
  yield put({ type: GET_UNITS_PENDING, units });
  yield put({ type: GET_UNITS_SUCCESS, units });
}
