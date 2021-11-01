import styled from "styled-components";

export const LeadWrapper = styled.div`
  position: relative;
  grid-column: ${({ isPrimary }) => (isPrimary ? "1 / 7" : "8 / 13")};
`;
export const ImgWrapper = styled.div`
  position: relative;
  div {
    overflow: unset;
  }
  img {
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
`;
