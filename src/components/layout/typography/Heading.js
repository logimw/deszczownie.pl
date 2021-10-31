import React from "react";
import { HeadingStyled } from "./Heading.styled";

const Heading = ({ children }) => {
  return <HeadingStyled>{children}</HeadingStyled>;
};

export default Heading;
