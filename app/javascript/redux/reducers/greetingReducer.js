import { GET_GREETING } from "../types";

const initialValue = [];

const greetingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
