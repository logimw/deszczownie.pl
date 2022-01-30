import styled from "styled-components";
import { Link } from "gatsby";

export const StyledButton = styled(Link)`
  min-width: 18rem;
  height: 5rem;
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  border-radius: 2px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    svg {
      transform: translateX(50%);
      fill: ${({ theme, secondary }) =>
        secondary ? theme.colors.white : theme.colors.primary};
    }
  }

  svg {
    transition: transform 300ms ease-in-out, fill 300ms;
    margin-left: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    fill: ${({ theme, secondary }) =>
      secondary ? theme.colors.white : theme.colors.primary};
  }
`;
