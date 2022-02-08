import styled from "styled-components";
import { Container } from "../layout/Layout.styles";
import breakpoints from "../../assets/styles/breakpoints";

export const ProductHeroStyles = styled.header`
  grid-column: full-start / full-end;
  max-height: 70rem;
  overflow: hidden;
  position: relative;
  @media only screen and ${breakpoints.device.m} {
    min-height: 50vh;
  }
`;

export const ProductContainerStyles = styled(Container)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and ${breakpoints.device.m} {
    align-items: end;
    padding-bottom: 2.5rem;
  }
`;
