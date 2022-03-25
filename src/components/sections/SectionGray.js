import React, { useEffect, useRef } from "react";
import { Container } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { SectionGrayStyles } from "./SectionGray.styles";
import OfferItem from "../elements/OfferItem";
import { GridContainer } from "../elements/OfferItem.styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionGray = () => {
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
    <SectionGrayStyles ref={ref}>
      <Container className="fade">
        <Heading>
          <h2 className="gray">
            Oferujemy sprawdzone rozwiązania w nawadnianiu!
          </h2>
        </Heading>
        <GridContainer primary>
          <OfferItem img={"../../assets/images/slider.jpg"} title={"test"} />
          <OfferItem img={"../../assets/images/slider.jpg"} title={"test"} />
          <OfferItem img={"../../assets/images/slider.jpg"} title={"test"} />
        </GridContainer>
      </Container>
    </SectionGrayStyles>
  );
};

export default SectionGray;
