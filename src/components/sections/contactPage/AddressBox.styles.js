import styled from "styled-components";

export const StyledAddressBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AddressItem = styled.div`
  display: flex;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 1.5rem;
    height: 3.8rem;
    width: 3.8rem;
    min-width: 3.8rem;
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.secondary};

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: color 300ms ease;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  p.title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
