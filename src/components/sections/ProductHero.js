import React from "react";
import {
  ProductContainerStyles,
  ProductHeroStyles,
} from "./ProductHero.styles";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import OfferItem from "../elements/OfferItem";
import { SliderWrapper } from "./HeroSlider.styles";
import PropTypes from "prop-types";

const ProductHero = ({ title, img }) => {
  return (
    <ProductHeroStyles>
      <SliderWrapper>
        {img && (
          <GatsbyImage
            alt={`Hero image of ${title}`}
            image={img}
            className="slider-bg"
          />
        )}
        {!img && (
          <StaticImage
            src="../../assets/images/hero-product.png"
            alt="Slider 1"
            quality={60}
            placeholder="blurred"
          />
        )}
      </SliderWrapper>

      <ProductContainerStyles>
        <OfferItem description title={title} noLink />
      </ProductContainerStyles>
    </ProductHeroStyles>
  );
};

ProductHero.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductHero;
