import React, { useEffect, useState } from "react";
import {
  ProductContainerStyles,
  ProductHeroStyles,
} from "./ProductHero.styles";
import { StaticImage } from "gatsby-plugin-image";
import OfferItem from "../elements/OfferItem";
import breakpoints from "../../assets/styles/breakpoints";

const ProductHero = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const breakPoint = parseInt(breakpoints.size.m);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    windowGlobal.onresize = () => {
      windowGlobal.innerWidth >= breakPoint
        ? setMobile(true)
        : setMobile(false);
    };
  }, []);

  const setHero = () => {
    if (mobile) {
      return (
        <StaticImage
          src="../../assets/images/hero-product.png"
          alt="Slider 1"
          className="slider-bg"
          quality={60}
          layout="fullWidth"
          placeholder="blurred"
        />
      );
    } else {
      return (
        <StaticImage
          src="../../assets/images/hero-product.png"
          alt="Slider 1"
          className="slider-bg"
          quality={60}
          height={500}
          layout="fixed"
          placeholder="blurred"
        />
      );
    }
  };

  return (
    <ProductHeroStyles>
      {setHero()}
      <ProductContainerStyles>
        <OfferItem description />
      </ProductContainerStyles>
    </ProductHeroStyles>
  );
};

export default ProductHero;
