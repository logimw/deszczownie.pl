import React from "react";
import { StyledBurgerMenu } from "./BurgerMenu.styles";
import PropTypes from "prop-types";

const BurgerMenu = ({ onClick, isOpen }) => {
  return (
    <StyledBurgerMenu onClick={onClick} isOpen={isOpen}>
      <span />
      <span />
      <span />
    </StyledBurgerMenu>
  );
};

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default BurgerMenu;
