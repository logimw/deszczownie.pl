import React from "react";
import { Container, Section } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { StaticImage } from "gatsby-plugin-image";

const Lead = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1> Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!</h1>
        </Heading>
        <StaticImage
          src="../../assets/images/KMK-zdjecie-60.jpg"
          alt="Deszczownia"
          width="632"
          height="720"
        />
      </Container>
    </Section>
  );
};

export default Lead;
