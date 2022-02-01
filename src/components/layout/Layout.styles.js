import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";
import marker from "assets/images/list-marker.png";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&display=swap");
  width: 100%;
  display: grid;
  grid-template-columns:
    [full-start] 15px 1fr [container-start] minmax(70rem, 140rem)
    [container-end] 1fr 15px [full-end];
  margin: 0;
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: [full-start] 15px 1fr 1fr 1fr 15px [full-end];
  }
`;

export const Section = styled.section`
  grid-column: full-start / full-end;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  width: 100%;

  .hero {
    padding-top: 10rem;
    padding-bottom: 10rem;
    @media only screen and ${breakpoints.device.m} {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  .first-col {
    grid-column: 1 / 6;
  }
  .second-col {
    grid-column: 8 / 6 span;
  }
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const TextBox = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr 1fr;
  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: 1fr;
  }

  .full-col {
    grid-column: 1 / -1;
  }

  ul {
    grid-column: 2;
    grid-row: 1;
    @media only screen and ${breakpoints.device.lg} {
      grid-column: 1;
      grid-row: auto;
    }
  }

  > div {
    grid-column: 1;
    @media only screen and ${breakpoints.device.lg} {
      grid-column: 1;
    }
  }

  .second-col {
    grid-column: 2;
    @media only screen and ${breakpoints.device.lg} {
      grid-column: 1;
    }
  }

  p.lead {
    font-size: 2.4rem;
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
