import React from "react";
import { StyledIconWrapper } from "./IconWrapper.styles";

const IconWrapper = ({ children, isBottom, isLogo }) => {
  return (
    <StyledIconWrapper isBottom={isBottom} isLogo={isLogo}>
      {children}
    </StyledIconWrapper>
  );
};

export default IconWrapper;
