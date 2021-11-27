import { call } from "@redux-saga/core/effects";
import axios from "axios";
import fakeData from "../../helpers/fakeAPI/age-of-empires-units.json";

async function fetchUnits(){
    try{
      const data=await axios.get("https://jsonplaceholder.typicode.com/users");
      return data;
    }catch(error){
      console.log(error);
    }
}

export function* handleGetUnits(){
  yield call(fetchUnits);
  
}