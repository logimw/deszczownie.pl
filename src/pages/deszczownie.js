import React from "react";
import Layout from "../components/layout/Layout";
import { Section } from "../components/layout/Layout.styles";
import Partners from "../components/sections/Partners";
import Cta from "../components/sections/Cta";
import ProductHero from "../components/sections/ProductHero";

const ContactPage = () => {
  return (
    <Layout>
      <ProductHero />
      <Section>Test page</Section>
      <Cta />
      <Partners />
    </Layout>
  );
};

export default ContactPage;
