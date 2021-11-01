import styled from "styled-components";

export const StyledIconWrapper = styled.div`
  position: absolute;
  height: 15rem;
  width: 15rem;
  background-color: ${({ isLogo }) => (isLogo ? "transparent" : "#256D1B")};
  top: ${({ isBottom }) => (isBottom ? "auto" : "-5rem")};
  bottom: ${({ isBottom }) => (isBottom ? "-10rem" : "auto")};
  left: -7.5rem;
  padding: 1rem;
  z-index: 10;
  border-radius: 10px;
`;
