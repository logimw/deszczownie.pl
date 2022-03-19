import React from "react";
import { InputWrapper } from "./Input.styles";
import PropTypes from "prop-types";

const Input = ({ id, type, label, placeholder, required }) => {
  return (
    <InputWrapper>
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      {type === "textarea" ? (
        <textarea id={id} name={id} placeholder={placeholder} required />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required
        />
      )}
    </InputWrapper>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
