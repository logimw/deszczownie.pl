import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const GridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 66%;
  column-gap: 15rem;

  margin-top: 10rem;

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: 1fr;
  }

  a {
    margin-top: 5rem;
    margin-right: 5rem;
  }
`;
export const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10rem;
  margin-top: 10rem;
  @media only screen and ${breakpoints.device.m} {
    column-gap: 2rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 2.5rem;
  }
`;

export const WrapperImages = styled.div``;

export const GridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  @media only screen and ${breakpoints.device.lg} {
    margin-top: 5rem;
  }
  @media only screen and ${breakpoints.device.xs} {
    grid-template-columns: 1fr;
  }

  .item:nth-child(1) {
    grid-column: 2 / span 2;
    @media only screen and ${breakpoints.device.xs} {
      grid-column: 1;
      grid-row: auto;
    }
  }

  .item:nth-child(2) {
    grid-column: 1 / span 2;
    grid-row: 2;
    @media only screen and ${breakpoints.device.xs} {
      grid-column: 1;
      grid-row: auto;
    }
  }

  .item:nth-child(3) {
    grid-column: 3 / span 2;
    grid-row: 2;
    @media only screen and ${breakpoints.device.xs} {
      grid-column: 1;
      grid-row: auto;
    }
  }
`;
