import styled from "styled-components";

export const StyledSubheading = styled.div`
  background-color: ${({ color }) =>
    color === "green" ? "rgba(37, 109, 27, 0.3)" : "#FFF"};
  width: 100%;
  max-width: 50rem;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  margin-bottom: 2.5rem;
  height: 4rem;
  display: flex;
  align-items: center;

  p {
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ color, theme }) =>
      color === "green" ? theme.colors.primary : "black"};
  }
`;
