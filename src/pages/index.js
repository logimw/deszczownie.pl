import React from "react";
import Layout from "components/layout/Layout";
import Partners from "components/sections/Partners";
import Cta from "components/sections/Cta";
import HeroSlider from "../components/sections/HeroSlider";
import Lead from "../components/sections/Lead";
import AboveCta from "../components/sections/AboveCta";
import TextImages from "../components/sections/TextImages";

const HomePage = () => {
  return (
    <Layout>
      <HeroSlider />
      <Lead />
      <AboveCta />
      <Cta />
      <TextImages />
      <Cta />
      <Partners />
    </Layout>
  );
};

export default HomePage;
