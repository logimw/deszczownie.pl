import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const StyledSlideContent = styled.div`
  width: 100vw;
  overflow: hidden;
  height: 100%;
`;
export const SliderWrapper = styled.div`
  height: 75vh;
  overflow: hidden;
  grid-column: 1 / -1;

  .hero-slider {
    height: 100%;
  }

  .slider-bg {
    img {
      //@media only screen and ${breakpoints.device.sm} {
      min-height: 75vh;
      width: 100%;
      //}
    }
  }
`;
