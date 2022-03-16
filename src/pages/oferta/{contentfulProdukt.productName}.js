import React from "react";
import { Section } from "components/layout/Layout.styles";
import Layout from "components/layout/Layout";
import { graphql } from "gatsby";
import Cta from "components/sections/Cta";
import Partners from "components/sections/Partners";
import ProductHero from "../../components/sections/ProductHero";
import { getImage } from "gatsby-plugin-image";
import ProductSection from "../../components/sections/productPage/ProductSection";

const ProductPage = ({ data }) => {
  const { productName, category, longDescription, titleTop, titleBottom, bg } =
    data.contentfulProdukt;
  const heroImg = getImage(bg);
  let text = JSON.parse(longDescription.raw);
  text = text.content[0].content[0].value;
  return (
    <Layout>
      <ProductHero title={productName} img={heroImg} />
      <ProductSection title={titleTop} text={text} />
      <ProductSection title={titleBottom} />
      <Cta />
      <Partners />
    </Layout>
  );
};

export const query = graphql`
  query getSingleProduct($productName: String) {
    contentfulProdukt(productName: { eq: $productName }) {
      productName
      category
      longDescription {
        raw
      }
      titleBottom
      shortDescription
      titleTop
      metaTitle
      metaDescription
      firstPhoto {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      bg {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
      }
      productLogo {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
      }
      secondDescription {
        raw
      }
      secondPhoto {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default ProductPage;
