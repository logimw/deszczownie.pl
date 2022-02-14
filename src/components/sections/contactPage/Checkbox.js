import React from "react";
import { CheckboxWrapper } from "./Checkbox.styles";

const Checkbox = ({ id, label, required }) => {
  return (
    <CheckboxWrapper>
      <input type="checkbox" id={id} name={id} required />
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
