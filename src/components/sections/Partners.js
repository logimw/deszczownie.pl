import React, { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { Section } from "../layout/Layout.styles";
import rmLogo from "assets/images/rm-logo.png";
import { PartnersStyles, StyledPartnersLogo } from "./Partners.styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Partners = () => {
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
          start: "bottom bottom",
          end: "top top",
        },
      },
    );
  }, []);
  return (
    <Section ref={ref}>
      <SectionTitle title="Nasi partnerzy" className="fade" />
      <PartnersStyles className="fade">
        <StyledPartnersLogo>
          <img src={rmLogo} alt="" />
        </StyledPartnersLogo>
        <StyledPartnersLogo>
          <img src={rmLogo} alt="" />
        </StyledPartnersLogo>
        <StyledPartnersLogo>
          <img src={rmLogo} alt="" />
        </StyledPartnersLogo>
        <StyledPartnersLogo>
          <img src={rmLogo} alt="" />
        </StyledPartnersLogo>
      </PartnersStyles>
    </Section>
  );
};

export default Partners;
