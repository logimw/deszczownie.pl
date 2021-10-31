import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  SliderContainer,
  SliderWrapper,
  StyledSlideContent,
} from "./HeroSlider.styles";
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
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        className="hero-slider"
      >
        <SwiperSlide>
          <StyledSlideContent>
            <SliderContainer>
              <h2>Najlepsze deszczownie na rynku</h2>
              <div>
                <p>
                  Oferujemy dystrybucję najlepszych maszyn nawadniających. Nasze
                  deszczownie to sprawdzone rozwiązanie dla rolnictwa. Oferujemy
                  dystrybucję najlepszych maszyn nawadniających. Nasze
                  deszczownie to sprawdzone rozwiązanie dla rolnictwa.
                </p>
              </div>
            </SliderContainer>

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
          <StyledSlideContent>
            <SliderContainer>
              <h2>Najlepsze deszczownie na rynku</h2>
              <div>
                <p>
                  Oferujemy dystrybucję najlepszych maszyn nawadniających. Nasze
                  deszczownie to sprawdzone rozwiązanie dla rolnictwa. Oferujemy
                  dystrybucję najlepszych maszyn nawadniających. Nasze
                  deszczownie to sprawdzone rozwiązanie dla rolnictwa.
                </p>
              </div>
            </SliderContainer>
            <StaticImage
              src="../../assets/images/slider2.jpg"
              alt="Slider 2"
              className="slider-bg"
              layout={layout}
              quality={60}
              placeholder="blurred"
            />
          </StyledSlideContent>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};

export default HeroSlider;
