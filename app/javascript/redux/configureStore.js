import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import greetingReducer from "./reducers/greetingReducer";

const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

export default store;
