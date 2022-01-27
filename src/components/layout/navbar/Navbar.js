import React, { useEffect, useRef, useState } from "react";
import { NavbarContainer, StyledNavbar } from "./Navbar.styles";
import Logo from "./Logo";
import NavList from "./NavList";
import BurgerMenu from "./BurgerMenu";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const windowGlobal = typeof window !== "undefined" && window;

  const onClick = e => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  useEffect(() => {
    windowGlobal.onscroll = () => {
      if (windowGlobal.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <StyledNavbar isScrolled={scrolled}>
      <NavbarContainer ref={dropdownRef}>
        <Logo />
        <NavList isOpen={isActive} />
        <BurgerMenu onClick={e => onClick(e)} isOpen={isActive} />
      </NavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
