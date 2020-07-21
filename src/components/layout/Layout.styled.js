import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { Row } from 'components/grid';

export const Blog = styled(Row)`
  h1,
  h2,
  h3,
  h4,
  h5 {
    .bookmark-link {
      display: none;
      margin-left: 6px;
      font-size: 14px;
      line-height: 1;
    }

    &:hover {
      .bookmark-link {
        display: inline-block;
      }
    }
  }

  section {
    padding-top: 60px;

    ${theme.mediaQueries.lg`
      padding-top: 40px;
    `}
  }

  ul li,
  p {
    font-size: 18px;
    line-height: 1.8;

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .remark-code-title {
    padding: 0.5em;
    font-size: 0.825em;
    color: #333;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
  }

  code.hljs {
    font-size: 14px;
  }

  code {
    padding: 2px;
    color: #d14;
    background-color: #f8f8f8;

    ${theme.mediaQueries.lg`
      font-size: 16px;
      line-height: 1.4;
    `}
  }
`;
