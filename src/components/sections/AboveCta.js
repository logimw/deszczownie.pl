import React from "react";
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

const AboveCta = () => {
  return (
    <StyledAboveCta>
      <Container>
        <Subheading />

        <GridContainer>
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
        <CenteredContainer>
          <CtaFeature img={Plant} />
          <CtaFeature img={Plant} />
          <CtaFeature img={Plant} />
        </CenteredContainer>
      </Container>
    </StyledAboveCta>
  );
};

export default AboveCta;
