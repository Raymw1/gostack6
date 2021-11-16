import "./config/ReactotronConfig";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <h1>Hello, World!</h1>
    </Provider>
  );
}
