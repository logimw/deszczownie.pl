import styled from "styled-components";
import breakpoints from "../../../assets/styles/breakpoints";

export const StyledInput = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "IBM Plex Sans", sans-serif;
    color: ${({ theme }) => theme.colors.greyFont};
  }

  input {
    max-width: 50%;
    @media only screen and ${breakpoints.device.m} {
      max-width: unset;
    }
  }

  input,
  textarea {
    padding: 1.1rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;

    &::placeholder {
      color: ${({ theme }) => theme.colors.greyFont};
    }
  }
`;
