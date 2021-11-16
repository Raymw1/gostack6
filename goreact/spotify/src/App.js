import "./config/ReactotronConfig";
import GlobalStyle from "./styles/global";
import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Provider store={store}>
      <Sidebar />
      <GlobalStyle />
    </Provider>
  );
}
