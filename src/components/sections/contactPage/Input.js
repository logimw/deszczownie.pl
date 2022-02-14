import React from "react";
import { InputWrapper } from "./Input.styles";

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

export default Input;
