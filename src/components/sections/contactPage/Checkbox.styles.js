import styled from "styled-components";
import breakpoints from "../../../assets/styles/breakpoints";

export const CheckboxWrapper = styled.div`
  //display: flex;
  margin-bottom: 1.5rem;

  label {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "IBM Plex Sans", sans-serif;
    color: ${({ theme }) => theme.colors.greyFont};
  }

  input {
    max-width: 50%;
    margin-right: 0.5rem;
  }
`;
