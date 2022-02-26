import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import { Provider } from "react-redux";
import store from "../redux/configureStore";

class App extends React.Component {
  render() {
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
