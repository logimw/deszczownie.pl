import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

const StyledLogo = styled.div`
  max-width: 46rem;
  @media only screen and ${breakpoints.device.lg} {
    max-width: 30rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    max-width: 25rem;
  }
  @media only screen and ${breakpoints.device.xs} {
    max-width: 20rem;
  }

  img {
    width: 100%;
  }
`;

export default StyledLogo;
