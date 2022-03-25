import React from "react";
import { StyledSectionTitle } from "./SectionTitle.styles";
import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle, lead }) => {
  return (
    <StyledSectionTitle>
      {subtitle && <p className="subtitle fade">{subtitle}</p>}
      <h2 className="heading fade fade-top">{title}</h2>
      {lead && <p className="lead fade-top">{lead}</p>}
      <div className="heading-decoration-container ">
        <div className="heading-decoration fade-top" />
        <div className="heading-decoration fade-top" />
        <div className="heading-decoration fade-top" />
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
