import React from "react";
import { Wrapper } from "./Layout.styles";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        {children}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
