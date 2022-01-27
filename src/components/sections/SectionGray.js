import React from "react";
import { Container } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { SectionGrayStyles } from "./SectionGray.styles";
import OfferItem from "../elements/OfferItem";
import Product from "../../assets/images/slider.jpg";
import { GridContainer } from "../elements/OfferItem.styles";

const SectionGray = () => {
  return (
    <SectionGrayStyles>
      <Container>
        <Heading>
          <h2 className="gray">
            Oferujemy sprawdzone rozwiązania w nawadnianiu!
          </h2>
        </Heading>
        <GridContainer>
          <OfferItem img={"../../assets/images/slider.jpg"} />
          <OfferItem img={"../../assets/images/slider.jpg"} />
          <OfferItem img={"../../assets/images/slider.jpg"} />
        </GridContainer>
      </Container>
    </SectionGrayStyles>
  );
};

export default SectionGray;
