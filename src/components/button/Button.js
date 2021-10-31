import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children, page }) => {
  return <StyledButton to={`${page}`}>{children}</StyledButton>;
};

export default Button;
