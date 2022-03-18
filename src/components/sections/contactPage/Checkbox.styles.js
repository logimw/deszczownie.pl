import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  margin-bottom: 1.5rem;

  label {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "IBM Plex Sans", sans-serif;
    color: ${({ theme }) => theme.colors.greyFontDark};

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-bottom-color 300ms;
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  input {
    max-width: 50%;
    margin-right: 0.5rem;
  }
`;
