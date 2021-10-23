import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-size: 16px;
    font-family: "Source Sans Pro", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #f5f5f5;
  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: #7159c1;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;

  input {
    flex: 1;
    border: 0;
    background-color: #fff;
    color: #333;
    height: 3.2rem;
    font-size: 14px;
    border-radius: 0.4rem;
    padding: 0 1.2rem;
    margin-right: 0.8rem;
  }

  button {
    background-color: transparent;
    border: 0;
    font-weight: 600;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.4s;

    &:hover {
      transform: translateY(-5%);
    }
  }
`;

export const Repositories = styled.ul`
  list-style: none;
  margin: 7.2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.6rem;

  li {
    flex: 1;
    border: 1px solid #eee;
    padding: 1.6rem;
    background-color: #fff;
    box-shadow: 0 0 1rem 0 rgba(221, 221, 221, 0.5);
    border-radius: 0%.4rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    img {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
    }

    div {
      flex: 1;

      strong {
        color: #333;
        font-size: 16px;
      }

      p {
        font-size: 14px;
        color: #666;
        margin-top: 0.4rem;
      }

      a {
        color: #7159c1;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        margin-top: 0.8rem;
        text-transform: uppercase;
        display: block;
      }
    }
  }
`;
