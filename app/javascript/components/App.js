import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";
const store = configureStore();

class App extends React.Component {
  render() {
    console.log(store);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HelloWorld greeting="Hello" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
