import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { unitsReducer } from "../reducers/units";
import createSagaMiddleware from "@redux-saga/core";

const reducers=combineReducers({
  units:unitsReducer,
})

const sagaMiddleware=createSagaMiddleware();
export const store=createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)))