import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const StyledCtaFeature = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
  max-width: 50rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 5rem;
  text-align: center;
  row-gap: 3rem;
  @media only screen and ${breakpoints.device.m} {
    padding: 3rem 2rem;
    row-gap: 1rem;
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
