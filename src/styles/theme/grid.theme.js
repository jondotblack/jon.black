import { css } from '@emotion/react';

const gridTheme = {};

/**
  using styled-system variants requires an array of
  breakpoints, aliases added for ease of use
*/
const breakpoints = ['576px', '768px', '992px', '1200px', '1400px'];
gridTheme.breakpoints = breakpoints;
gridTheme.breakpoints.xs = '0';
[
  gridTheme.breakpoints.sm,
  gridTheme.breakpoints.md,
  gridTheme.breakpoints.lg,
  gridTheme.breakpoints.xl,
  gridTheme.breakpoints.xxl,
] = breakpoints;

/**
  default grid configuration
*/
gridTheme.grid = {
  columns: 12,
  gutter: 24,
  maxWidth: gridTheme.breakpoints.xxl,
};

/**
  @depricated - use ${media} instead
  generate media query helpers
  example usage: ${gridTheme.mediaQueries.lg`
    display: none;
  `};
*/
gridTheme.mediaQueries = Object.keys(gridTheme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${gridTheme.breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default gridTheme;
