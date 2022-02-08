import { createGlobalStyle } from "styled-components";
import breakpoints from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&display=swap');
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and ${breakpoints.device.lg} {
      font-size: 57.5%;
    }
  }
  *, *::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, a, button {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;
