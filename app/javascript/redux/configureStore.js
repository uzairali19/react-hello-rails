import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import greetingReducer from "./reducers/greetingReducer";

const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, logger))
);

export default store;
