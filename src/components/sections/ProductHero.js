import React from "react";
import {
  ProductContainerStyles,
  ProductHeroStyles,
} from "./ProductHero.styles";
import { StaticImage } from "gatsby-plugin-image";
import OfferItem from "../elements/OfferItem";

const ProductHero = () => {
  return (
    <ProductHeroStyles>
      <StaticImage
        src="../../assets/images/hero-product.png"
        alt="Slider 1"
        className="slider-bg"
        quality={60}
        layout="fullWidth"
        placeholder="blurred"
      />
      <ProductContainerStyles>
        <OfferItem />
      </ProductContainerStyles>
    </ProductHeroStyles>
  );
};

export default ProductHero;
