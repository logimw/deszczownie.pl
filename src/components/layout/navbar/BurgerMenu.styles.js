import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const StyledBurgerMenu = styled.button`
  display: none;
  height: 2.5rem;
  width: 3.5rem;
  position: relative;
  background: none;
  border: none;
  outline: none;
  @media only screen and ${breakpoints.device.sm} {
    display: block;
  }

  span {
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    display: block;
    position: absolute;
    left: 0;
    transition: opacity 300ms ease-in-out;

    &:first-child {
      top: 0;
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    &:nth-child(2) {
      top: 50%;
      visibility: hidden;
      transform: translateY(-50%);
      &:after,
      &:before {
        visibility: visible;
        opacity: 1;
        content: "";
        position: absolute;
        height: inherit;
        width: inherit;
        background: ${({ theme }) => theme.colors.primary};
        left: 0;
        transition: transform 300ms ease-in-out;
      }
      &:after {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      }
      &:before {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      }
    }
    &:last-child {
      top: 100%;
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
  }
`;
