import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";

import GlobalStyle from "./Style";

import store from "./store";

import Main from "./pages/main";

console.tron.log("Testing...");

const App = () => (
  <Provider store={store}>
    <Main />
    <GlobalStyle />
  </Provider>
);

export default App;
