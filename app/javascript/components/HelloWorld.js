import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/actions/greeting";

const HelloWorld = ({ greeting }) => {
  const [greetings, setGreetings] = useState(null);
  const dispatch = useDispatch();

  const reducerGreetings = useSelector((state) => state.greetingReducer);

  useEffect(() => {
    console.log(dispatch(getGreetings()));
  }, []);

  const handleGetGreetings = () => {
    dispatch(getGreetings());
    setGreetings(reducerGreetings);
    console.log(greetings);
  };

  return (
    <>
      <div>Greeting: {greeting}</div>
      <button onClick={handleGetGreetings}>Get all greetings</button>
      <ul>
        {greetings !== null &&
          greetings.map((greeting) => (
            <li key={greeting.id}>{greeting.greet}</li>
          ))}
      </ul>
    </>
  );
};

export default HelloWorld;
