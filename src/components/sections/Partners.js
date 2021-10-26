import React from "react";
import SectionTitle from "./SectionTitle";
import { Section } from "../layout/Layout.styles";
import rmLogo from "assets/images/rm-logo.png";
import { PartnersStyles, StyledPartnersLogo } from "./Partners.styles";

const Partners = () => {
  return (
    <Section>
      <SectionTitle title="Nasi partnerzy" />
      <PartnersStyles>
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
