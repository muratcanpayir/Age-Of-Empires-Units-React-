import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { unitsReducer } from "../reducers/units";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga/rootSaga";
import { unitDetailsReducer } from "../reducers/unitDetails";

const reducers = combineReducers({
  units: unitsReducer,
  unitDetails:unitDetailsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
