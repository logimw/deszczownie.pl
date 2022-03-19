import React from "react";
import { HeadingStyled } from "./Heading.styled";
import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return <HeadingStyled>{children}</HeadingStyled>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
