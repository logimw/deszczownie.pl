import React from "react";
import Layout from "components/layout/Layout";
import { Section } from "components/layout/Layout.styles";
import Partners from "components/sections/Partners";
import SectionTitle from "components/sections/SectionTitle";
import SectionOffer from "components/sections/SectionOffer";
import SEO from "components/Seo";

const OffersPage = () => {
  return (
    <Layout>
      <SEO title="Oferta" />
      <Section>
        <div className="hero">
          <SectionTitle title="Oferta" />
        </div>
      </Section>
      <SectionOffer />
      <Partners />
    </Layout>
  );
};

export default OffersPage;
