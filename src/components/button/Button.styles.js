import styled from "styled-components";
import { Link } from "gatsby";

export const StyledButton = styled(Link)`
  min-width: 25rem;
  height: ${({ size }) => (size === "s" ? "5rem" : "8rem")};
  background-color: ${({ theme, secondary, tertiary }) =>
    secondary
      ? theme.colors.secondary
      : tertiary
      ? "transparent"
      : theme.colors.primary};
  border-radius: 2px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.75rem;
  padding-right: 2.75rem;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  font-family: "IBM Plex Sans", sans-serif;
  max-width: 34rem;
  transition: background-color 300ms, color 300ms;
  border: ${({ theme, tertiary }) =>
    tertiary ? `1px solid ${theme.colors.white}` : null};

  &:hover {
    background-color: ${({ theme, secondary, tertiary }) =>
      secondary
        ? theme.colors.secondaryDarken
        : tertiary
        ? theme.colors.white
        : theme.colors.primaryDarken};
    color: ${({ theme, tertiary }) =>
      tertiary ? theme.colors.secondary : null};
    svg {
      transform: translateX(50%);
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  svg {
    transition: transform 300ms ease-in-out, fill 300ms;
    margin-left: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    fill: ${({ theme }) => theme.colors.white};
  }
`;
