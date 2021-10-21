import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";

import GlobalStyle from "./Style";

import store from "./store";

import Main from "./pages/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.tron.log("Testing...");

const App = () => (
  <Provider store={store}>
    <Main />
    <GlobalStyle />
    <ToastContainer />
  </Provider>
);

export default App;
