import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AboutImagesWrapper } from "./AboutImages.styles";

const AboutImages = () => {
  return (
    <AboutImagesWrapper className="fade">
      <StaticImage
        src={"../../assets/images/about-bg-1.png"}
        alt="Maszty kmk agro"
        quality={60}
        layout="constrained"
        placeholder="blurred"
      />
      <StaticImage
        src={"../../assets/images/about-bg-2.png"}
        alt="Deszczownia"
        quality={60}
        layout="constrained"
        placeholder="blurred"
      />
      <StaticImage
        src={"../../assets/images/about-bg-1.png"}
        alt="Maszty kmk agro"
        quality={60}
        layout="constrained"
        placeholder="blurred"
      />
    </AboutImagesWrapper>
  );
};

export default AboutImages;
