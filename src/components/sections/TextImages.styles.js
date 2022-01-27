import styled from "styled-components";

export const GridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 66%;
  column-gap: 15rem;

  margin-top: 10rem;

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
`;

export const WrapperImages = styled.div``;

export const GridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;

  .item:nth-child(1) {
    grid-column: 2 / span 2;
  }

  .item:nth-child(2) {
    grid-column: 1 / span 2;
    grid-row: 2;
  }

  .item:nth-child(3) {
    grid-column: 3 / span 2;
    grid-row: 2;
  }
`;
