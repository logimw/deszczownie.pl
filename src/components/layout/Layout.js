import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Layout.styles";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import BackToTop from "components/elements/BackToTop";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
