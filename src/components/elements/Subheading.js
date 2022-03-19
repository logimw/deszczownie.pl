import React from "react";
import PropTypes from "prop-types";
import { StyledSubheading } from "./Subheading.styles";

const Subheading = ({ color, text }) => {
  return (
    <StyledSubheading color={color}>
      <p>{text ? text : "Dystrybucja maszyn RM"}</p>
    </StyledSubheading>
  );
};

Subheading.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Subheading;
