import React, { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { Container, Section, TextBox } from "../layout/Layout.styles";
import { GridImages, GridWrapper } from "./TextImages.styles";
import Button from "../button/Button";
import { BsArrowRight } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextImages = () => {
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
        <GridWrapper>
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
          <GridImages>
            <div className="item">
              <StaticImage
                src="../../assets/images/rm-logo.png"
                alt="RM Logo"
                quality={60}
                layout="constrained"
                placeholder="blurred"
              />
            </div>
            <div className="item">
              {" "}
              <StaticImage
                src="../../assets/images/d1.png"
                alt="Dzezczwonia 1"
                quality={60}
                layout="constrained"
                placeholder="blurred"
              />
            </div>
            <div className="item">
              {" "}
              <StaticImage
                src="../../assets/images/d2.png"
                alt="Dzezczwonia 2"
                quality={60}
                layout="constrained"
                placeholder="blurred"
              />
            </div>
          </GridImages>
        </GridWrapper>
      </Container>
    </Section>
  );
};

export default TextImages;
