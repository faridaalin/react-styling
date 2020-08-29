import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    body {
        background: #E6E6E6;
        font-family: 'Open Sans', sans-serif;
        color: #1C1B1B;
        height: 100%;
    }
`;

export default GlobalStyle;
