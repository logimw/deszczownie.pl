import React from "react";
import {
  FooterContainer,
  FooterContent,
  StyledFooter,
  SubFooter,
} from "./Footer.styles";
import Logo from "../navbar/Logo";
import FooterLinks from "./FooterLinks";
import MouseIcon from "../../../assets/svg/mouse.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <h5>Firma</h5>
          <Logo />
        </div>
        <div>
          <h5>Oferta</h5>
          <FooterLinks />
        </div>
        <div className="address">
          <span className="address__tel">
            <a href="tel:+48612580179">
              <em>+ 48</em> 61 258 01 79
            </a>
          </span>
          <span className="address__mail">
            Email:&nbsp;<a href="mailto:biuro@kmkagro.com">biuro@kmkagro.com</a>
          </span>
          <address>
            <span>Ul. Poznańska 20, Brodowo</span>
            <span>63-000 Środa Wlkp.</span>
            <img src={MouseIcon} alt="mouse icon" className="address__icon" />
          </address>
        </div>
        <SubFooter>
          © {new Date().getFullYear()} KMK Agro deszczownie, All Rights
          Reserved.
        </SubFooter>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
