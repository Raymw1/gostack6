import "./config/ReactotronConfig";
import "./styles";
import GlobalStyle from "./styles/global";
import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import { Wrapper, Container } from "./styles/components";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
        <Player />
      </Wrapper>
      <GlobalStyle />
    </Provider>
  );
}
