import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/configureStore";
import { getGreetings } from "../redux/actions/greeting";

const DispathData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);
  return <></>;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DispathData />
        <Routes>
          <Route path="/" element={<HelloWorld greeting="Hello" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
