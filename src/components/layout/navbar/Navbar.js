import React, { useEffect, useState } from "react";
import { NavbarContainer, StyledNavbar } from "./Navbar.styles";
import Logo from "./Logo";
import NavList from "./NavList";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <StyledNavbar isScrolled={scrolled}>
      <NavbarContainer>
        <Logo />
        <NavList isOpen={isOpen} />
        <BurgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </NavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
