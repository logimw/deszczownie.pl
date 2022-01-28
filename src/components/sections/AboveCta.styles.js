import styled from "styled-components";
import { Section } from "../layout/Layout.styles";
import breakpoints from "../../assets/styles/breakpoints";

export const StyledAboveCta = styled(Section)`
  grid-column: 1 / -1;
  height: 50vh;
  min-height: 72rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-top: 7.5rem;
  padding-bottom: 0;
  position: relative;
  z-index: 1;
  @media only screen and ${breakpoints.device.sm} {
    height: auto;
    padding-bottom: 2.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    grid-column: 1;
  }

  .button-group {
    display: flex;
    justify-content: space-between;

    a {
      min-width: 22rem;
    }
  }
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  justify-items: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 45%;
  column-gap: 20%;

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
  }
  @media only screen and ${breakpoints.device.m} {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 2rem;
  }
`;

export const CenteredContainer = styled.div`
  max-width: 106rem;
  margin: 9.5rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  @media only screen and ${breakpoints.device.m} {
    grid-gap: 2.5rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    margin: 1.5rem auto 0;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  }
`;
