import React from "react";
import { StyledSubheading } from "./Subheading.styles";

const Subheading = ({ color, text }) => {
  return (
    <StyledSubheading color={color}>
      <p>{text ? text : "Dystrybucja maszyn RM"}</p>
    </StyledSubheading>
  );
};

export default Subheading;
