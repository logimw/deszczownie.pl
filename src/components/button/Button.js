import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children }) => {
  return <StyledButton to="/">{children}</StyledButton>;
};

export default Button;
