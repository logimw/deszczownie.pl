import React from "react";
import { StyledIconWrapper } from "./IconWrapper.styles";
import PropTypes from "prop-types";

const IconWrapper = ({ children, isBottom, isLogo }) => {
  return (
    <StyledIconWrapper isBottom={isBottom} isLogo={isLogo}>
      {children}
    </StyledIconWrapper>
  );
};

IconWrapper.propTypes = {
  children: PropTypes.node,
  isBottom: PropTypes.bool,
  isLogo: PropTypes.bool,
};

export default IconWrapper;
