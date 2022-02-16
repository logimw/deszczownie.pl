import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children, page, size, secondary, tertiary }) => {
  return (
    <StyledButton
      secondary={secondary}
      tertiary={tertiary}
      to={`${page}`}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
