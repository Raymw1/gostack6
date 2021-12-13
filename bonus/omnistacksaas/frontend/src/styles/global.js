import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

  :root {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #353940;
    color: #FFF;
    font-family: "Source Sans Pro", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    font-size: 16px;
    height: 100%;
  }

  input, button {
    font-family: "Source Sans Pro", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
