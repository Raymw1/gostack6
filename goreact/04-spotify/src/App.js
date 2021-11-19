import "./config/ReactotronConfig";
import "./styles";
import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { Wrapper, Container, Content } from "./styles/components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Player from "./components/Player";
import ErrorBox from "./components/ErrorBox";

import Routes from "./routes";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}
