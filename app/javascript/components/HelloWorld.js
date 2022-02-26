import React, { useState } from "react";
import { useSelector } from "react-redux";

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
