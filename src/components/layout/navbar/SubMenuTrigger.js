import React, { useRef } from "react";
import { useDetectOutsideClick } from "hooks/useDetectOutsideClick";
import { StyledNavLink } from "./NavList.styles";

const SubMenuTrigger = ({ children }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = e => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <details open={isActive} onClick={e => onClick(e)}>
      <summary ref={dropdownRef}>{children}</summary>
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
  );
};

export default SubMenuTrigger;
