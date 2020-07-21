import styled from '@emotion/styled';

export const Footer = styled.footer`
  padding-top: 3rem;
  padding-bottom: 3rem;

  a {
    font-size: 18px;
    line-height: 54px;
  }
`;

export const FooterNav = styled.nav`
  a {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const OpenSource = styled.a`
  display: block;
  margin-top: 1rem;
  background: url('/static/svg/icon_external_link.svg') 100% 40% no-repeat;
  background-size: 16px;
`;
