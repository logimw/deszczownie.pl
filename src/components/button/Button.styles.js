import styled from "styled-components";
import { Link } from "gatsby";

export const StyledButton = styled(Link)`
  width: 18rem;
  height: 5rem;
  background: ${({ theme }) => theme.colors.primary};
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

  &:hover {
    svg {
      transform: translateX(50%);
    }
  }

  svg {
    transition: transform 300ms ease-in-out;
    margin-left: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
