import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGreetings } from "../redux/actions/greeting";

const HelloWorld = ({ greeting }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return <div>Greeting: {greeting}</div>;
};

export default HelloWorld;
