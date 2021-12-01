import {  
  GET_UNIT_DETAILS_SAGA, 
} from "../constants/unitDetails"; 
 
export const getUnitDetails = () => ({
  type:GET_UNIT_DETAILS_SAGA,
})