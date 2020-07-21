import { css } from '@emotion/core';

export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    seed: '#40413b',
    crema: '#cbccc3',
    azul: '#c3c8cc',
    verde: '#c3ccc6',
    rojo: '#ccc3c3',
    morado: '#ccc3ca',
  },
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

theme.grid = {
  columns: 12,
  gutter: '24px',
  maxWidth: theme.breakpoints.xxl,
};

theme.mediaQueries = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${theme.breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
