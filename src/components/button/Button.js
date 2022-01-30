import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children, page, secondary }) => {
  return (
    <StyledButton secondary={secondary} to={`${page}`}>
      {children}
    </StyledButton>
  );
};

export default Button;
