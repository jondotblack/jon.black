import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const List = styled.div`
  border-top: 1px solid rgba(64, 65, 59, 0.3);
`;

export const Item = styled.div`
  padding-top: 25px;
  padding-bottom: 20px;
  font-size: 40px;
  line-height: 1.2;
  border-bottom: 1px solid rgba(64, 65, 59, 0.3);

  ${theme.mediaQueries.lg`
      font-size: 28px;
      line-height: 34px;
    `}

  a {
    display: block;
    padding-right: 60px;
    background: url('/static/svg/icon_external_link.svg') 100% 50% no-repeat;
  }

  p {
    &:last-of-type {
      margin-bottom: 0;
    }

    a {
      display: inline-block;
      background: none;
    }
  }
`;
