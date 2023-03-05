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
    color: white;
    font-size: 1.6rem;
    min-height: 100vh;
    background: linear-gradient(115deg, rgb(68, 124, 156), rgb(25, 15, 115));
    margin: 0.5rem;
  }

  li {
    list-style: none;
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