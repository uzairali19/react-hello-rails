import { GET_GREETING } from "../types";
const api = "http://localhost:3000";

export const getGreetings = () => async (dispatch) => {
  const data = await fetch(`${api}/api/v1/greetings`).then((res) => res.json());
  try {
    const action = { type: GET_GREETING, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};
