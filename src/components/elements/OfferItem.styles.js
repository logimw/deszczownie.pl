import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const StyledOfferItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
  max-width: 50rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  row-gap: 3rem;
  overflow: hidden;
  position: relative;

  a {
    text-decoration: none;
  }

  &:hover {
    &::after {
      transform: scaleX(2);
    }
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: 0;
    right: 0;
    width: 90%;
    height: 5px;
    transition: transform 300ms ease;
  }

  .offer-item-container {
    padding: 3.5rem;

    @media only screen and ${breakpoints.device.m} {
      padding: 2.5rem;
    }
  }

  .img-container {
    max-height: 44rem;

    img {
      transition: transform 500ms ease;
      width: 100%;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .offer-item-header {
    padding-bottom: 4rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.greySecondary};
    @media only screen and ${breakpoints.device.m} {
      padding-bottom: 2rem;
    }
  }

  .offer-item-text {
    padding-top: 3.5rem;
    padding-bottom: 4rem;
  }

  h5 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1.6rem;
    color: #828282;
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  svg {
    transition: fill 300ms ease-in-out;
    margin-left: 1.5rem;
    width: 5rem;
    height: 5rem;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.5rem;

  margin-top: 7.5rem;
  margin-bottom: 7.5rem;

  @media only screen and ${breakpoints.device.m} {
    grid-gap: 2rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
