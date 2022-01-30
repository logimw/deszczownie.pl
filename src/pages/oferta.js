import React from "react";
import Layout from "../components/layout/Layout";
import { Section } from "../components/layout/Layout.styles";
import Partners from "../components/sections/Partners";
import SectionGray from "../components/sections/SectionGray";
import SectionTitle from "../components/sections/SectionTitle";
import SectionOffer from "../components/sections/SectionOffer";

const AboutPage = () => {
  return (
    <Layout>
      <Section>
        <SectionTitle title="Oferta" />
      </Section>
      <SectionOffer />
      <Partners />
    </Layout>
  );
};

export default AboutPage;
