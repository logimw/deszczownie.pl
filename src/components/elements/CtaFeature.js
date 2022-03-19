import React from "react";
import PropTypes from "prop-types";
import { StyledCtaFeature } from "./CtaFeature.styles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CtaFeature = ({ img }) => {
  return (
    <StyledCtaFeature>
      <img src={img} alt="Cta feature icon" />
      <h5>Skuteczne nawadanianie roślin</h5>
      <p>Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!</p>
      <BsFillArrowRightCircleFill />
    </StyledCtaFeature>
  );
};

CtaFeature.propTypes = {
  img: PropTypes.string,
};

export default CtaFeature;
