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

  .gatsby-image-wrapper {
    overflow: unset;
  }

  .swiper-pagination-bullet {
    width: 25px;
    border-radius: 0;
    transition: background-color 300ms ease-in-out;

    &.swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .swiper-button-prev {
    left: 0;

    &::before {
      right: 8px;
      transform: translate(0%, -4px) rotate(-45deg);
    }

    &::after {
      right: 8px;
      transform: translate(0%, 2px) rotate(45deg);
    }
  }

  .swiper-button-next {
    right: 0;

    &::before {
      right: 8px;
      transform: translate(0%, -4px) rotate(45deg);
    }

    &::after {
      right: 8px;
      transform: translate(0%, 2px) rotate(-45deg);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    transform: translateY(-50%);
    top: 50%;
    height: 60px;
    width: 30px;
    position: absolute;
    z-index: 999;
    background: ${({ theme }) => theme.colors.white};

    &::after,
    &::before {
      position: absolute;
      content: "";
      top: 50%;
      height: 3px;
      width: 12px;
      background: ${({ theme }) => theme.colors.secondary};
    }

    &.swiper-button-disabled {
      opacity: 0.6;
    }
  }

  .hero-slider {
    height: 100%;
  }

  .slider-bg {
    img {
      //@media only screen and ${breakpoints.device.sm} {
      min-height: 75vh;
      //width: 100%;
      width: 100vw;
      //}
    }
  }
`;

export const SliderContainer = styled.div`
  height: 100%;
  padding: 0 3rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.h2};
    text-shadow: 1px 1px 2px #000;
    padding-bottom: 3rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
    text-shadow: 1px 1px 2px #000;
  }
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
`;
