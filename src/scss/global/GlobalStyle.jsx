import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
  }
  
  html {
    color-scheme: dark light;
    --color-primary: "yellow";
    --color-secondary: "purple";
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  
  body {
    font-size: 1.6rem;
    min-height: 100vh;
    background-color: grey;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyle;