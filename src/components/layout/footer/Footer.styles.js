import styled from "styled-components";
import { Container } from "../Layout.styles";
import breakpoints from "../../../assets/styles/breakpoints";

export const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  min-height: 5rem;
  padding: 10rem 1.5rem 5rem;
  overflow: hidden;

  h5 {
    font-size: ${({ theme }) => theme.fontSize.l};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    max-width: 15rem;
  }
  img {
    padding-top: 5rem;
    max-width: 40rem;
  }

  .address {
    a {
      text-decoration: none;
    }
    span {
      display: block;
    }
    &__tel {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      @media only screen and ${breakpoints.device.sm} {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
      a {
        color: ${({ theme }) => theme.colors.white};
      }
      em {
        color: ${({ theme }) => theme.colors.grey};
      }
    }
    &__mail {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: 700;
      padding-top: 2.5rem;
      padding-bottom: 1.5rem;
      a {
        color: ${({ theme }) => theme.colors.primary};
        transition: color ease 300ms;
        &:hover {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    &__icon {
      position: absolute;
      right: -25px;
      top: -150%;
      z-index: 0;
      @media only screen and ${breakpoints.device.xxs} {
        right: -150px;
        top: -300%;
      }
    }

    address {
      color: ${({ theme }) => theme.colors.grey};
      font-style: normal;
      font-size: ${({ theme }) => theme.fontSize.m};
      position: relative;

      span {
        position: relative;
        z-index: 1;
      }
    }
  }
`;

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5rem 2rem;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  div:first-child {
    grid-column: 1 / 4;
    @media only screen and ${breakpoints.device.sm} {
      grid-column: auto;
    }
    @media only screen and ${breakpoints.device.xxs} {
      grid-row: 1;
      grid-column: 1 / -1;
    }
  }
  div:nth-child(2) {
    @media only screen and ${breakpoints.device.lg} {
      grid-column: 4 / 6;
    }
    @media only screen and ${breakpoints.device.sm} {
      grid-column: 1 / 2;
      grid-row: 2;
    }
    @media only screen and ${breakpoints.device.xxs} {
      grid-row: 2;
      grid-column: 1 / -1;
    }
  }
  .address {
    grid-column: 7 / -1;
    justify-self: end;
    @media only screen and ${breakpoints.device.sm} {
      grid-column: 2;
      grid-row: 1;
      justify-self: start;
    }
    @media only screen and ${breakpoints.device.xxs} {
      grid-row: 3;
      grid-column: 1 / -1;
    }
  }
`;

export const SubFooter = styled.div`
  padding-top: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  grid-column: 1 / -1;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const StyledFooterLinks = styled.ul`
  list-style: none;
  padding-top: 5rem;
  li {
    padding-bottom: 1rem;
    a {
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => theme.colors.grey};
      text-decoration: none;
      transition: color 300ms ease;
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
