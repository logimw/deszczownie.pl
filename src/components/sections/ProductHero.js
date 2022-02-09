import React from "react";
import {
  ProductContainerStyles,
  ProductHeroStyles,
} from "./ProductHero.styles";
import { StaticImage } from "gatsby-plugin-image";
import OfferItem from "../elements/OfferItem";
import { SliderWrapper } from "./HeroSlider.styles";

const ProductHero = () => {
  return (
    <ProductHeroStyles>
      <SliderWrapper>
        <StaticImage
          src="../../assets/images/hero-product.png"
          alt="Slider 1"
          className="slider-bg"
          quality={60}
          placeholder="blurred"
        />
      </SliderWrapper>

      <ProductContainerStyles>
        <OfferItem description title="Deszczownie" />
      </ProductContainerStyles>
    </ProductHeroStyles>
  );
};

export default ProductHero;
