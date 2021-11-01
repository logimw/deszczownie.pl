import styled from "styled-components";

export const HeadingStyled = styled.div`
  color: ${({ theme }) => theme.colors.secondary};

  h1,
  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }

  .subheading {
    width: 100%;
    max-width: 50rem;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    margin-bottom: 2.5rem;

    &.green {
      background-color: rgba(37, 109, 27, 0.3);
    }
  }
`;
