import React, { useEffect, useRef } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BackToTopStyles } from "./BackToTop.styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.from(element, {
      scrollTrigger: {
        start: "top -750",
        end: 999999,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: "7vw",
      duration: 0.5,
    });
  }, []);
  return (
    <BackToTopStyles ref={ref} className="btn-to-top" onClick={scrollToTop}>
      <MdOutlineArrowForwardIos />
    </BackToTopStyles>
  );
};

export default BackToTop;
