import { call, put } from "@redux-saga/core/effects";
import axios from "axios";
import {
  GET_UNIT_DETAILS_PENDING,
  GET_UNIT_DETAILS_SUCCESS,
} from "../constants/unitDetails";

function fetchUnitDetails(id) {
  try {
    const data = axios.get(
      `https://sore-marbled-grapple.glitch.me/units/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetUnitDetails(action) {
  const unitDetails = yield call(fetchUnitDetails, action.id);
  yield put({ type: GET_UNIT_DETAILS_PENDING, unitDetails });
  yield put({ type: GET_UNIT_DETAILS_SUCCESS, unitDetails });
}
