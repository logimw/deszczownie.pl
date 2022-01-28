import React from "react";
import SectionTitle from "./SectionTitle";
import { Container, Section, TextBox } from "../layout/Layout.styles";
import { GridImages, GridWrapper } from "./TextImages.styles";
import Button from "../button/Button";
import { BsArrowRight } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";

const TextImages = () => {
  return (
    <Section>
      <SectionTitle
        title="Sekcja z galerią lub artykułami lub rekomendacjami lub z logami producentów"
        subtitle="Dystrybucja maszyn RM"
      />
      <Container>
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
