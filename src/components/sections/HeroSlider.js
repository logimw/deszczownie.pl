import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  SliderContainer,
  SliderWrapper,
  StyledSlideContent,
} from "./HeroSlider.styles";
import { StaticImage } from "gatsby-plugin-image";
import breakpoints from "../../assets/styles/breakpoints";
import Button from "../button/Button";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";

const HeroSlider = () => {
  let width;
  const [layout, setLayout] = useState("");
  const windowGlobal = typeof window !== "undefined" && window;
  useEffect(() => {
    if (windowGlobal.innerWidth < parseInt(breakpoints.size.sm)) {
      width = 770;
      setLayout("fixed");
    } else {
      width = null;
      setLayout("fullWidth");
    }
  }, []);

  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".fade-top"), {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 1,
    });
  }, []);

  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        className="hero-slider"
      >
        <SwiperSlide>
          <StyledSlideContent ref={ref}>
            <SliderContainer className="fade-top">
              <h1>Najlepsze deszczownie na rynku</h1>
              <div>
                <p>
                  Oferujemy dystrybucję najlepszych maszyn nawadniających. Nasze
                  deszczownie to sprawdzone rozwiązanie dla rolnictwa. Oferujemy
                  dystrybucję najlepszych maszyn nawadniających. Nasze
                  deszczownie to sprawdzone rozwiązanie dla rolnictwa.
                </p>
              </div>
              <Button page="/oferta">
                Zobacz ofertę
                <BsArrowRight />
              </Button>
            </SliderContainer>

            <StaticImage
              src="../../assets/images/slider.jpg"
              alt="Slider 1"
              className="slider-bg"
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
              layout="constrained"
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
