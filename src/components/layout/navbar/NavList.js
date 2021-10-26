import React from "react";
import { StyledNavLink, StyledNavList } from "./NavList.styles";
import SubMenuTrigger from "./SubMenuTrigger";

const NavList = ({ isOpen }) => {
  return (
    <StyledNavList isOpen={isOpen}>
      <li>
        <StyledNavLink activeClassName="nav--active" to="/">
          Strona Główna
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink activeClassName="nav--active" to="/o-nas">
          O nas
        </StyledNavLink>
      </li>
      <li>
        <SubMenuTrigger>
          <StyledNavLink activeClassName="nav--active" to="/oferta">
            Oferta
          </StyledNavLink>
        </SubMenuTrigger>
      </li>
      <li>
        <StyledNavLink activeClassName="nav--active" to="/deszczownie">
          Deszczownie
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink activeClassName="nav--active" to="/deszczownie">
          Pompy
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink activeClassName="nav--active" to="/deszczownie">
          Agregaty
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink activeClassName="nav--active" to="/kontakt">
          Kontakt
        </StyledNavLink>
      </li>
    </StyledNavList>
  );
};

export default NavList;
