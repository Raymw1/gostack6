import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`;

const Form = styled.form`
  margin-top: 1.8rem;
  width: 100%;
  max-width: 40rem;
  display: flex;

  input {
    flex: 1;
    height: 5.4rem;
    padding: 0 2rem;
    background-color: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 0.4rem;
  }

  button {
    height: 5.4rem;
    padding: 0 2rem;
    margin-left: 1rem;
    background-color: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    transition: all 0.2s;

    &:hover {
      background-color: #52d89f;
    }
  }
`;

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />
    <Form>
      <input type="text" placeholder="User/Repository" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;
