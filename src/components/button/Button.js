import React from "react";
import PropTypes from "prop-types";
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
  size: PropTypes.string,
  secondary: PropTypes.string,
  tertiary: PropTypes.string,
};

export default Button;
