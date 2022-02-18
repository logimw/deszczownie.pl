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
  }
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  .full-col {
    grid-column: 1 / -1;
  }

  > .col-1 {
    grid-column: 1 / 6;
    @media only screen and ${breakpoints.device.m} {
      grid-column: 1 / -1;
    }
  }

  > .col-2 {
    grid-column: 8 / 6 span;
    @media only screen and ${breakpoints.device.m} {
      grid-column: 3 / 11;
      margin-top: 5rem;
    }
    @media only screen and ${breakpoints.device.sm} {
      grid-column: 2 / 12;
    }
    @media only screen and ${breakpoints.device.xs} {
      grid-column: 1 / -1;
    }

    img {
      @media only screen and ${breakpoints.device.m} {
        max-width: 80rem;
      }
      @media only screen and ${breakpoints.device.sm} {
        max-width: 60rem;
      }
    }
  }
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const GridWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10rem;

  .col-1 {
    @media only screen and ${breakpoints.device.m} {
      grid-column: 1 / -1;
    }
  }

  .col-2 {
    @media only screen and ${breakpoints.device.m} {
      grid-column: 1 / -1;
    }
  }
`;

export const TextBox = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr 1fr;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: left;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.secondary};
      @media only screen and ${breakpoints.device.sm} {
        font-size: 1.3rem;
      }
    }

    th,
    td {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
    }

    thead {
      th {
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      }
    }

    tbody {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.greyFont};
      @media only screen and ${breakpoints.device.sm} {
        font-size: 1.2rem;
      }
    }

    tr {
      td {
        border-bottom: 1px solid ${({ theme }) => theme.colors.greyFont};

        &:first-child {
          color: ${({ theme }) => theme.colors.secondary};
          font-weight: bold;
        }
      }
    }
  }

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: 1fr;
  }

  ul {
    grid-column: 2;
    grid-row: 1;
    @media only screen and ${breakpoints.device.lg} {
      grid-column: 1;
      grid-row: auto;
    }
  }

  .col {
    grid-column: 1 / -1;
  }

  .col-1 {
    grid-column: 1;
    @media only screen and ${breakpoints.device.lg} {
      grid-column: 1;
    }
  }

  .col-2 {
    grid-column: 2;
    @media only screen and ${breakpoints.device.lg} {
      grid-column: 1;
    }
  }

  p.lead {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  ul.product-features-list {
    list-style: none;

    div {
      padding-left: 7.5rem;
      position: relative;

      &::after {
        content: "";
        background-color: ${({ theme }) => theme.colors.primary};
        height: 1.25rem;
        width: 1.25rem;
        position: absolute;
        left: 0;
        top: 5px;
      }
    }

    li {
      position: relative;
    }
  }

  p,
  ul {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 1.5rem;
    list-style-position: inside;
    color: ${({ theme }) => theme.colors.greyFont};
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
