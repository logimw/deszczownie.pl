import React from "react";
import Layout from "../components/layout/Layout";
import Partners from "../components/sections/Partners";
import Cta from "../components/sections/Cta";
import ProductHero from "../components/sections/ProductHero";
import FirstSection from "../components/sections/productPage/FirstSection";

const ContactPage = () => {
  return (
    <Layout>
      <ProductHero />
      <FirstSection />
      <Cta />
      <Partners />
    </Layout>
  );
};

export default ContactPage;
