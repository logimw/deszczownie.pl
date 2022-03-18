import styled from "styled-components";

export const HeadingStyled = styled.div`
  h1,
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.h2};
  }

  .stripes {
    position: relative;

    span.stripe {
      position: absolute;
      left: 0;
      top: 25%;
      transform: translate(calc(-100% - 5rem), -50%);
      background-color: ${({ theme }) => theme.colors.primary};
      height: 1px;
      width: 1500px;
      &:nth-child(2) {
        top: 50%;
      }
      &:nth-child(3) {
        top: 75%;
      }
    }
  }
`;
