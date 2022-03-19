import React from "react";
import { CheckboxWrapper } from "./Checkbox.styles";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Checkbox = ({ id, required }) => {
  return (
    <CheckboxWrapper>
      <input type="checkbox" id={id} name={id} required />
      <label htmlFor={id}>
        Akceptuję {<Link to={"/kontakt"}>politykę prywatności</Link>} i wyrażam
        zgodę na przetwarzanie danych osobowych.
        {required && "*"}
      </label>
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Checkbox;
