import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HelloWorld greeting="Hello" />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
