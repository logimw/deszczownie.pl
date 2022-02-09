import styled from "styled-components";
import { Container } from "../layout/Layout.styles";
import breakpoints from "../../assets/styles/breakpoints";

export const AboutImagesWrapper = styled(Container)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  grid-gap: 5rem;

  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }

  .img-wrapper:nth-child(1) {
    //grid-column: 1;
  }

  .img-wrapper:nth-child(2) {
    //grid-column: 2;
  }

  .img-wrapper:nth-child(3) {
    //grid-column: 3;
  }
`;
