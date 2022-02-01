import styled from "styled-components";
import { Container } from "../layout/Layout.styles";

export const ProductHeroStyles = styled.header`
  grid-column: full-start / full-end;
  max-height: 70rem;
  overflow: hidden;
  position: relative;
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
`;
