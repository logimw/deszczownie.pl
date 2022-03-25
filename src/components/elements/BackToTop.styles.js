import styled from "styled-components";

export const BackToTopStyles = styled.button`
  position: fixed;
  bottom: 10vh;
  right: 5vw;
  height: 4rem;
  width: 4rem;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDarken};
  outline: none;
  cursor: pointer;
  z-index: 101;

  svg {
    transform: rotate(-90deg);
    height: 2.5rem;
    width: 2.5rem;
    fill: ${({ theme }) => theme.colors.secondaryDarken};
  }
`;
