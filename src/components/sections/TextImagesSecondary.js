import React, { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { Container, Section, TextBox } from "../layout/Layout.styles";
import { GridContainer, WrapperImages } from "./TextImages.styles";
import Button from "../button/Button";
import { BsArrowRight } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import OfferItem from "../elements/OfferItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextImagesSecondary = () => {
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
      <SectionTitle
        title="Sekcja z galerią lub artykułami lub rekomendacjami lub z logami producentów"
        subtitle="Dystrybucja maszyn RM"
      />
      <Container className="fade">
        <GridContainer>
          <TextBox>
            <div className="full-col">
              <p className="lead">
                <b>
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                </b>
              </p>
              <div>
                <p>
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                </p>
                <p>Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!</p>
              </div>
              <Button page="/oferta">
                Spawdź ofertę <BsArrowRight />
              </Button>
            </div>
          </TextBox>
          <OfferItem img={"../../assets/images/slider.jpg"} title={"test"} />
          <WrapperImages>
            <StaticImage
              src="../../assets/images/d1.png"
              alt="test"
              placeholder="blurred"
              layout="fullWidth"
            />
            <StaticImage
              src="../../assets/images/d4.png"
              alt="test"
              placeholder="blurred"
              layout="fullWidth"
            />
          </WrapperImages>
        </GridContainer>
      </Container>
    </Section>
  );
};

export default TextImagesSecondary;
