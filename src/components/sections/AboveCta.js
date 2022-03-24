import React, { useEffect, useRef } from "react";
import { Container } from "components/layout/Layout.styles";
import Heading from "components/layout/typography/Heading";
import {
  CenteredContainer,
  GridContainer,
  StyledAboveCta,
} from "./AboveCta.styles";
import CtaFeature from "../elements/CtaFeature";
import Plant from "assets/svg/plant.svg";
import Subheading from "components/elements/Subheading";
import Button from "components/button/Button";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboveCta = () => {
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
    <StyledAboveCta ref={ref}>
      <Container>
        <Subheading className="fade" />

        <GridContainer className="fade">
          <Heading>
            <h3>Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!</h3>
          </Heading>
          <div>
            <div>
              <p>
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              </p>
              <p>
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              </p>
            </div>
            <div className="button-group">
              <Button page={"/oferta"}>
                Sprawdź ofertę <BsArrowRight />
              </Button>
              <Button tertiary page={"/kontakt"}>
                Skontaktuj się
              </Button>
            </div>
          </div>
        </GridContainer>
        <CenteredContainer className="fade">
          <CtaFeature img={Plant} />
          <CtaFeature img={Plant} />
          <CtaFeature img={Plant} />
        </CenteredContainer>
      </Container>
    </StyledAboveCta>
  );
};

export default AboveCta;
