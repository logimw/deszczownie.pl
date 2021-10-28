import React from "react";
import Layout from "components/layout/Layout";
import { Section } from "components/layout/Layout.styles";
import Partners from "components/sections/Partners";
import Cta from "components/sections/Cta";

const HomePage = () => {
  return (
    <Layout>
      <Section>test</Section>
      <Cta />
      <Partners />
    </Layout>
  );
};

export default HomePage;
