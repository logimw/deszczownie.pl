import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const StyledSectionTitle = styled.div`
  position: relative;

  .heading {
    font-size: ${({ theme }) => theme.fontSize.h2};
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    text-align: center;
    background: ${({ theme }) => theme.colors.white};
    max-width: 100rem;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    @media only screen and ${breakpoints.device.sm} {
      max-width: 40rem;
    }
    @media only screen and ${breakpoints.device.xs} {
      max-width: 35rem;
    }
  }

  .subtitle {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .heading-decoration-container {
    height: 4rem;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .heading-decoration {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 50%;
    }
    &:nth-of-type(3) {
      top: 100%;
      transform: translateY(-100%);
    }
  }
`;
