import styled from "styled-components";

export const HeadingStyled = styled.div`
  h1,
  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;
