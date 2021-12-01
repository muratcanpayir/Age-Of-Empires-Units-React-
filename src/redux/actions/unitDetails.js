import {  
  GET_UNIT_DETAILS_SAGA, 
} from "../constants/unitDetails"; 
 
export const getUnitDetails = (id) => ({
  type:GET_UNIT_DETAILS_SAGA,id
})