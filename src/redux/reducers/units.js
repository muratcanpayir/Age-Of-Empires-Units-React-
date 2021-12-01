import { REQUEST_STATUS } from "../../helpers/constants/constants"; 
import { 
  GET_UNITS_PENDING, 
  GET_UNITS_SUCCESS, 
  GET_UNITS_ERROR, 
} from "../constants/units"; 
const initial_state = { 
  data: [], 
  status: "", 
  error: "", 
}; 
export const unitsReducer = (state = initial_state, action) => { 
  switch (action.type) { 
    case GET_UNITS_PENDING: 
      return { ...state, status: REQUEST_STATUS.PENDING }; 
    case GET_UNITS_SUCCESS: 
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.units.data }; 
    case GET_UNITS_ERROR: 
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.units.data }; 
    default: 
      return state; 
  } 
};