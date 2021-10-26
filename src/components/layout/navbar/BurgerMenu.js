import React from "react";
import { StyledBurgerMenu } from "./BurgerMenu.styles";

const BurgerMenu = ({ onClick, isOpen }) => {
  return (
    <StyledBurgerMenu onClick={onClick} isOpen={isOpen}>
      <span />
      <span />
      <span />
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
