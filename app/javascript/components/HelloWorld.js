import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/actions/greeting";

const HelloWorld = () => {
  const [greet, setGreet] = useState(null);
  const reducerGreetings = useSelector((state) => state.greetingReducer);

  const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };

  const handleGetGreetings = () => {
    const greetNumber = randomInteger(0, 4);
    setGreet(greetNumber);
  };

  return (
    <>
      <div>
        Greeting:
        {reducerGreetings[greet] !== undefined && reducerGreetings[greet].greet}
      </div>
      <button onClick={handleGetGreetings}>Get all greetings</button>
    </>
  );
};

export default HelloWorld;
