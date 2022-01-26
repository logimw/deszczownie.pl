import React from "react";
import { Container, CtaContainer, StyledCta } from "./Cta.styles";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../button/Button";
import { BsArrowRight } from "react-icons/bs";

const Cta = () => {
  return (
    <StyledCta>
      <CtaContainer>
        <Container>
          <h3>
            Masz pytania? Zadzwoń lub skontaktuj się z nami przez formularz
            kontaktowy!
          </h3>
          <Button page={"/kontakt"}>
            Kontakt <BsArrowRight />
          </Button>
        </Container>
      </CtaContainer>

      <StaticImage
        src="../../assets/images/slider.jpg"
        alt="Cta background"
        layout="fullWidth"
        className="cta-bg"
        quality={10}
      />
    </StyledCta>
  );
};

export default Cta;
