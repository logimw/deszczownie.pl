import styled from "styled-components";
import { Container } from "../Layout.styles";
import breakpoints from "assets/styles/breakpoints";

export const StyledNavbar = styled.nav`
  grid-column: 1 /-1;
  height: ${({ isScrolled }) => (isScrolled ? "7.5rem" : "10rem")};
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  box-shadow: 0 1px 4px #e3e3e3;
  position: sticky;
  top: 0;
  transition: height 300ms ease-in-out;
  background: ${({ theme }) => theme.colors.white};
  z-index: 100;
  @media only screen and ${breakpoints.device.lg} {
    height: ${({ isScrolled }) => (isScrolled ? "5rem" : "8rem")};
    padding: 0;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media only screen and ${breakpoints.device.lg} {
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
    padding: 0 1.5rem;
  }
`;
