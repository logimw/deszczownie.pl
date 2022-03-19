import React from "react";
import Layout from "components/layout/Layout";
import Partners from "components/sections/Partners";
import Cta from "components/sections/Cta";
import HeroSlider from "components/sections/HeroSlider";
import Lead from "components/sections/Lead";
import AboveCta from "components/sections/AboveCta";
import TextImages from "components/sections/TextImages";
import SectionGray from "components/sections/SectionGray";
import TextImagesSecondary from "components/sections/TextImagesSecondary";
import SEO from "components/Seo";

import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        siteUrl
      }
    }
  }
`;

const HomePage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="Strona główna" />
      <HeroSlider />
      <Lead text={data.site.siteMetadata.title} />
      <AboveCta />
      <Cta />
      <TextImages />
      <SectionGray />
      <Cta />
      <TextImagesSecondary />
      <Partners />
    </Layout>
  );
};

export default HomePage;
