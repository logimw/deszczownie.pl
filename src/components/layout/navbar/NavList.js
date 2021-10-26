import React from "react";
import { StyledNavLink, StyledNavList } from "./NavList.styles";

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
        <details>
          <summary>
            <StyledNavLink activeClassName="nav--active" to="/oferta">
              Oferta
            </StyledNavLink>
          </summary>
          <ul className="submenu">
            <li>
              <StyledNavLink activeClassName="nav--active" to="/oferta-1">
                Akcesoria 1
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink activeClassName="nav--active" to="/oferta">
                Akcesoria 2
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink activeClassName="nav--active" to="/oferta-3">
                Akcesoria 3
              </StyledNavLink>
            </li>
          </ul>
        </details>
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
