import React from "react";
import { StyledSectionTitle } from "./SectionTitle.styles";
import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle, lead }) => {
  return (
    <StyledSectionTitle>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <h2 className="heading">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      <div className="heading-decoration-container">
        <div className="heading-decoration" />
        <div className="heading-decoration" />
        <div className="heading-decoration" />
      </div>
    </StyledSectionTitle>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  lead: PropTypes.string,
};

export default SectionTitle;
