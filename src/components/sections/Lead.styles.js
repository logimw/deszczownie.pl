import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const LeadWrapper = styled.div`
  position: relative;
  grid-column: ${({ isPrimary }) => (isPrimary ? "1 / 7" : "8 / 13")};

  @media only screen and ${breakpoints.device.m} {
    grid-column: ${({ isPrimary }) => (isPrimary ? "1 / -1" : "1 / -1")};
    grid-row: ${({ isPrimary }) => (isPrimary ? "2" : "1")};
    margin-top: ${({ isPrimary }) => (isPrimary ? "5rem" : "0")};
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 3px;
  border-radius: 10px;
  .img-animation {
    transition: transform 300ms;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
