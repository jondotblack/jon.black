import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, space, typography } from 'styled-system';
import { theme } from 'styles/theme';

export const Typography = styled.p`
  ${color}
  ${space}
  ${typography}

  ${(props) =>
    props.lead &&
    css`
      font-family: 'PP Woodland';
      font-size: 40px;
      line-height: 1.2;

      ${theme.mediaQueries.lg`
        font-size: 28px;
        line-height: 34px;
      `}

      a {
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    `};

    ${(props) =>
      props.small &&
      css`
        font-size: 18px;
        line-height: 24px;
      `};
`;
