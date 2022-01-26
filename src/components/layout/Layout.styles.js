import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";
import marker from "assets/images/list-marker.png";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns:
    [full-start] 15px 1fr [container-start] minmax(70rem, 140rem)
    [container-end] 1fr 15px [full-end];
  margin: 0;
  padding: 0;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: [full-start] 15px 1fr 1fr 1fr 15px [full-end];
  }
`;

export const Section = styled.section`
  grid-column: full-start / full-end;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const TextBox = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
  ul {
    grid-column: 2;
    grid-row: 1;
  }
  > div {
    grid-column: 1;
  }

  .second-col {
    grid-column: 2;
  }
  p,
  ul {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 1.5rem;
    list-style-position: inside;
    list-style-image: url(${marker});
    li {
      position: relative;
      margin-bottom: 1rem;
      span {
        position: absolute;
        top: 0;
      }
    }
  }
`;
