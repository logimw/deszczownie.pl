import React from "react";
import Layout from "../components/layout/Layout";
import Partners from "../components/sections/Partners";
import Cta from "../components/sections/Cta";
import ProductHero from "../components/sections/ProductHero";
import ProductSection from "../components/sections/productPage/ProductSection";

const ProductPage = () => {
  return (
    <Layout>
      <ProductHero />
      <ProductSection title={"Zalety deszczowni RM"} />
      <ProductSection
        title={"Parametry deszczowni RM"}
        lead={true}
        isSecondary
      />
      <Cta />
      <Partners />
    </Layout>
  );
};

export default ProductPage;
