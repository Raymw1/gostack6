import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";

import store from "./store";

import Routes from "./routes";

console.tron.log("Testing...");

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
