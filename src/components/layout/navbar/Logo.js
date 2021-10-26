import React from "react";
import { Link } from "gatsby";
import logo from "../../../assets/images/logo.png";
import StyledLogo from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img src={logo} alt="KMK Agro" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
