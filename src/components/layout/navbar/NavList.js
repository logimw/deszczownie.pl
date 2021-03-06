import React from "react";
import { MaskNav, StyledNavLink, StyledNavList } from "./NavList.styles";
import SubMenuTrigger from "./SubMenuTrigger";
import PropTypes from "prop-types";

const NavList = ({ isOpen }) => {
  return (
    <MaskNav isOpen={isOpen}>
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
          <StyledNavLink activeClassName="nav--active" to="/kontakt">
            Kontakt
          </StyledNavLink>
        </li>
      </StyledNavList>
    </MaskNav>
  );
};

NavList.propTypes = {
  isOpen: PropTypes.bool,
};

export default NavList;
