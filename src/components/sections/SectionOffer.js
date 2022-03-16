import React from "react";
import { Container } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { SectionGrayStyles } from "./SectionGray.styles";
import OfferItem from "../elements/OfferItem";
import { GridContainer } from "../elements/OfferItem.styles";
import { graphql, useStaticQuery } from "gatsby";

const SectionGray = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProdukt {
        nodes {
          productName
          shortDescription
          id
        }
      }
    }
  `);

  const products = data.allContentfulProdukt.nodes;

  return (
    <SectionGrayStyles>
      <Container>
        <Heading>
          <h2 className="gray">Sprawdź naszą ofertę!</h2>
        </Heading>
        <GridContainer>
          {products.map(product => (
            <OfferItem key={product.id} title={product.productName} />
          ))}
        </GridContainer>
      </Container>
    </SectionGrayStyles>
  );
};

export default SectionGray;
