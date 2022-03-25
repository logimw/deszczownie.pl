import React, { useEffect, useRef } from "react";
import { FooterContainer, StyledFooter, SubFooter } from "./Footer.styles";
import Logo from "../navbar/Logo";
import FooterLinks from "./FooterLinks";
import MouseIcon from "assets/svg/mouse.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelectorAll(".fade"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelectorAll(".fade"),
          start: "top bottom",
          end: "top top",
        },
      },
    );
  }, []);
  return (
    <StyledFooter ref={ref}>
      <FooterContainer className="fade">
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
