import { createStore } from "redux";

const initialState = {
  greetings: [],
};

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const configureStore = () => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
