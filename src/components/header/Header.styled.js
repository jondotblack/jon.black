import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { theme } from 'styles/theme';

export const Header = styled.div`
  padding: 60px 0;

  ${theme.mediaQueries.lg`
    padding: 26px 0;
    height: 100px;
  `};
`;

export const Logo = styled.div`
  font-family: 'PP Woodland', serif;
  font-size: 40px;
  line-height: 48px;
`;

export const HeaderNav = styled.nav`
  margin-left: -15px;

  ${theme.mediaQueries.lg`
    display: none;
  `};

  a {
    display: inline-flex;
    margin: 0 8px;
    padding: 0 15px;
    font-size: 18px;
    font-weight: 700;
    height: 48px;
    align-items: center;
    text-transform: uppercase;

    &:hover {
      text-decoration: none;
    }

    &:first-of-type {
      margin-left: 0;
    }

    &.active {
      padding: 0 15px;
      border: 1px solid #000;
      border-radius: 24px;
    }
  }
`;

export const HamburgerNav = styled.div`
  display: none;

  button {
    font-weight: 700;
  }

  ${theme.mediaQueries.lg`
    display: block;
  `};
`;

export const MobileMenu = styled.div`
  position: fixed;
  padding: 0.5rem 0 2rem;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: ${(props) => props.bgColor};
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(105%);
  transition: transform 400ms ease-in-out 100ms;
  z-index: 1;

  ${(props) =>
    props.activeNav &&
    css`
      transform: translateX(0%);
    `};
`;

export const MobileNav = styled.nav`
  margin-bottom: 3rem;

  a {
    display: block;
    margin-bottom: 1rem;
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const MobileLinks = styled.nav`
  margin-bottom: 3rem;

  a {
    display: block;
    font-size: 18px;
    line-height: 54px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
