import React from "react";
import { StyledSectionTitle } from "./SectionTitle.styles";

const SectionTitle = ({ title }) => {
  return (
    <StyledSectionTitle>
      <h2 className="heading">{title}</h2>
      <div className="heading-decoration-container">
        <div className="heading-decoration" />
        <div className="heading-decoration" />
        <div className="heading-decoration" />
      </div>
    </StyledSectionTitle>
  );
};

export default SectionTitle;
