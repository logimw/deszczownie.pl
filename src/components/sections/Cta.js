import React, { useEffect, useRef } from "react";
import { Container, CtaContainer, StyledCta } from "./Cta.styles";
import { StaticImage } from "gatsby-plugin-image";
import Button from "components/button/Button";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cta = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".fade"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".fade"),
          start: "bottom bottom",
          end: "top top",
        },
      },
    );
  }, []);

  return (
    <StyledCta>
      <CtaContainer ref={ref}>
        <Container className="fade">
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
