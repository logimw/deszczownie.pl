import React from "react";
import { StyledNavLink } from "./NavList.styles";

const SubMenu = () => {
  return (
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
  );
};

export default SubMenu;
