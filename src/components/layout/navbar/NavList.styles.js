import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import breakpoints from "../../../assets/styles/breakpoints";

const showList = keyframes`
  0% {
    transform: translateY(100%) scaleY(0);
  }
  100% {
    transform: translateY(100%) scaleY(1);
  }`;
const showListMobile = keyframes`
  0% {
    transform: translateY(0%) scaleY(0);
  }
  100% {
    transform: translateY(0%) scaleY(1);
  }`;
const showListItem = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;

  details {
    @media only screen and ${breakpoints.device.sm} {
      width: 100%;
    }

    &[open] {
      summary::after {
        transform: rotate(0);
      }

      summary::before {
        transform: rotate(0);
      }
    }

    &[open] .submenu {
      display: block;
    }

    summary {
      cursor: pointer;
      list-style: none;
      position: relative;
      padding-right: 1.5rem;

      a {
        @media only screen and ${breakpoints.device.sm} {
          width: 40%;
        }
      }

      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        width: 10px;
        height: 3px;
        background: ${({ theme }) => theme.colors.primary};
        transition: transform 300ms ease-in-out;
      }

      &::after {
        transform: rotate(-45deg);
        right: 2px;
        @media only screen and ${breakpoints.device.sm} {
          right: 52px;
        }
      }

      &::before {
        transform: rotate(45deg);
        right: 7px;
        @media only screen and ${breakpoints.device.sm} {
          right: 58px;
        }
      }

      &:focus {
        outline: 1px solid transparent;
      }
    }
  }

  .submenu {
    position: absolute;
    bottom: 0;
    transform: translateY(100%) scaleY(1);
    transform-origin: 0 0;
    animation: 300ms ease-in-out 1 forwards ${showList};
    display: none;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 1px 3px 4px #e3e3e3;
    list-style: none;
    border-left: 6px solid ${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    max-width: 15rem;

    @media only screen and ${breakpoints.device.sm} {
      position: relative;
      animation: 300ms ease-in-out 1 forwards ${showListMobile};
      max-width: unset;
      background: none;
      border-left: 0;
      box-shadow: 1px 0 4px #e3e3e3;
    }

    li {
      background-color: transparent;
      transition: background-color 300ms ease-in-out;

      @media only screen and ${breakpoints.device.sm} {
        border-top: 1px solid ${({ theme }) => theme.colors.grey};
      }

      a {
        opacity: 0;
        animation: 300ms 100ms ease-in-out 1 forwards ${showListItem};
        height: 100%;
        display: block;
        color: ${({ theme }) => theme.colors.white};
        padding-left: 0;
        margin-left: 1rem;
        margin-right: 1rem;
        @media only screen and ${breakpoints.device.sm} {
          min-height: 5rem;
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme.colors.secondary};
        }

        &.nav--active {
          border-bottom: 2px solid transparent;
        }

        &:hover {
          border-bottom: 2px solid transparent;
        }
      }

      &:not(a.nav--active) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
        @media only screen and ${breakpoints.device.sm} {
          //border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }
  }

  @media only screen and ${breakpoints.device.sm} {
    background: ${({ theme }) => theme.colors.lightGrey};
    z-index: -1;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 8rem;
    transition: transform 300ms ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    width: 50vw;
    min-width: 30rem;
    box-shadow: 1px 0 4px #e3e3e3;
  }

  li {
    @media only screen and ${breakpoints.device.sm} {
      width: 100%;
      padding-left: 5rem;
      min-height: 5rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
      display: flex;
      align-items: center;
    }
  }
`;

export const StyledNavLink = styled(Link)`
  padding: 1rem 1.5rem 0.5rem;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 2px solid transparent;
  will-change: border-bottom-color;
  transition: border-bottom-color 300ms ease;
  @media only screen and ${breakpoints.device.m} {
    padding: 1rem 0.75rem 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media only screen and ${breakpoints.device.sm} {
    padding-left: 0;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.l};
    min-height: 5rem;
    display: flex;
    align-items: center;
  }

  &.nav--active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    @media only screen and ${breakpoints.device.sm} {
      border-bottom: 2px solid transparent;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    @media only screen and ${breakpoints.device.sm} {
      border-bottom: 2px solid transparent;
    }
  }
`;
