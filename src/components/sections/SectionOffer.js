import React from "react";
import { Container } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { SectionGrayStyles } from "./SectionGray.styles";
import OfferItem from "../elements/OfferItem";
import { GridContainer } from "../elements/OfferItem.styles";

const SectionGray = () => {
  return (
    <SectionGrayStyles>
      <Container>
        <Heading>
          <h2 className="gray">Sprawdź naszą ofertę!</h2>
        </Heading>
        <GridContainer>
          <OfferItem />
          <OfferItem />
          <OfferItem />
          <OfferItem />
          <OfferItem />
          <OfferItem />
          <OfferItem />
          <OfferItem />
        </GridContainer>
      </Container>
    </SectionGrayStyles>
  );
};

export default SectionGray;
