import React, { useEffect, useRef } from "react";
import { Container } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { SectionGrayStyles } from "./SectionGray.styles";
import OfferItem from "../elements/OfferItem";
import { GridContainer } from "../elements/OfferItem.styles";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";

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

  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelectorAll(".fade-group"), {
      scrollTrigger: {
        trigger: element.querySelector("h2"),
        start: "bottom bottom",
        end: "top top",
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
    });
    gsap.from(element.querySelector(".fade"), {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
  }, []);

  return (
    <SectionGrayStyles>
      <Container ref={ref}>
        <Heading>
          <h2 className="gray fade">Sprawdź naszą ofertę!</h2>
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
