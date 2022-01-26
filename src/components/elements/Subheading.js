import React from "react";
import { StyledSubheading } from "./Subheading.styles";

const Subheading = ({ color }) => {
  return (
    <StyledSubheading color={color}>
      <p>Dystrybucja maszyn RM</p>
    </StyledSubheading>
  );
};

export default Subheading;
