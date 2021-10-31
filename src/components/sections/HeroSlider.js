import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { SliderWrapper, StyledSlideContent } from "./HeroSlider.styles";
import { StaticImage } from "gatsby-plugin-image";
import breakpoints from "../../assets/styles/breakpoints";

const HeroSlider = () => {
  let width;
  const [layout, setLayout] = useState("");
  console.log(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth < parseInt(breakpoints.size.sm)) {
      width = 770;
      setLayout("fixed");
    } else {
      width = null;
      setLayout("fullWidth");
    }
  }, []);

  console.log(typeof layout);

  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        className="hero-slider"
      >
        <SwiperSlide>
          <StyledSlideContent>
            <StaticImage
              src="../../assets/images/slider.jpg"
              alt="Slider 1"
              className="slider-bg"
              layout={layout}
              quality={60}
              placeholder="blurred"
            />
          </StyledSlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlideContent>{layout}</StyledSlideContent>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};

export default HeroSlider;
