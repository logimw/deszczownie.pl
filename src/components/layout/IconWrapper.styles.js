import styled from "styled-components";

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;
  height: 24rem;
  width: 24rem;
  background-color: ${({ isLogo }) => (isLogo ? "transparent" : "#256D1B")};
  top: ${({ isBottom }) => (isBottom ? "auto" : "-5rem")};
  bottom: ${({ isBottom }) => (isBottom ? "-10rem" : "auto")};
  left: -7.5rem;
  padding: 1rem;
  z-index: 10;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  box-shadow: ${({ isLogo }) =>
    isLogo ? "transparent" : "2px 2px 2px rgba(0, 0, 0, 0.3)"};

  h5 {
    margin-top: 1.5rem;
  }
`;
