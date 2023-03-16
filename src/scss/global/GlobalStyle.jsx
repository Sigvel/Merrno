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
    font-family: var(--font-fam);
    color: white;
    font-size: 1.6rem;
    min-height: 100vh;
    // background: linear-gradient(95deg, #B97F00, #6B5628);
    // background: linear-gradient(95deg, #2D3250, #424669);
    background: #2D3250;
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
    width: 100%;
    object-fit: center;
  }
`;

export default GlobalStyle;