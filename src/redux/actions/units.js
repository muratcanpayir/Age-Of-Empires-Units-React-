import { 
  GET_UNITS_PENDING, 
  GET_UNITS_SUCCESS, 
  GET_UNITS_ERROR, 
} from "../constants/units"; 
import fakeData from "../../helpers/fakeAPI/age-of-empires-units.json";
import axios from "axios"; 
 
export const getUnits = () => (dispatch) => { 
  dispatch({ type: GET_UNITS_PENDING }); 
  axios 
    .get("#") 
    .then((response) => { 
      dispatch({ type: GET_UNITS_SUCCESS, payload: fakeData }); 
    }) 
    .catch((error) => dispatch({ type: GET_UNITS_ERROR, payload: error })); 
};