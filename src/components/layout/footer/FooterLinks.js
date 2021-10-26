import React from "react";
import { StyledFooterLinks } from "./Footer.styles";
import { Link } from "gatsby";

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      <li>
        <Link to="/oferta">Deszczownia 1</Link>
      </li>
      <li>
        <Link to="/oferta">Deszczownia 2</Link>
      </li>
      <li>
        <Link to="/oferta">Deszczownia 3</Link>
      </li>
      <li>
        <Link to="/oferta">Deszczownia 4</Link>
      </li>
    </StyledFooterLinks>
  );
};

export default FooterLinks;
