import { REQUEST_STATUS } from "../../helpers/constants/constants";
import {
  GET_UNIT_DETAILS_PENDING,
  GET_UNIT_DETAILS_SUCCESS,
  GET_UNIT_DETAILS_ERROR,
} from "../constants/unitDetails";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const unitDetailsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_UNIT_DETAILS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_UNIT_DETAILS_SUCCESS:
      return {
        ...state,
        status: REQUEST_STATUS.SUCCESS,
        data: action.unitDetails.data,
      };
    case GET_UNIT_DETAILS_ERROR:
      return {
        ...state,
        status: REQUEST_STATUS.ERROR,
        error: action.unitDetails.data,
      };
    default:
      return state;
  }
};
