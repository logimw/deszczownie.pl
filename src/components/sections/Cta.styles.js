import styled from "styled-components";
import { Section } from "../layout/Layout.styles";

export const StyledCta = styled(Section)`
  grid-column: 1 / -1;
  height: 50vh;
  max-height: 70rem;
  min-height: 25rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    max-width: 50%;
  }

  .cta-bg {
    height: 100%;
    max-width: 100vw;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.9;
    }
  }
`;

export const CtaContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;
