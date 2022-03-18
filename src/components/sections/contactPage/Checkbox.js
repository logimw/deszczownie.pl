import React from "react";
import { CheckboxWrapper } from "./Checkbox.styles";
import { Link } from "gatsby";

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

export default Checkbox;
