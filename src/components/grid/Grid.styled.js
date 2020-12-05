import styled from '@emotion/styled';
import { compose, space, layout, typography, color, background, flexbox } from 'styled-system';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { theme } from 'styles/theme';

// eslint-disable-next-line no-underscore-dangle
const base = (props) => css(props.__css)(props.theme);
const sx = (props) => css(props.sx)(props.theme);

export const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
  },
  base,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, background, flexbox),
);

export const Flex = styled(Box)({
  display: 'flex',
});

export const Container = styled(Box)(({ fluid }) => ({
  width: '100%',
  maxWidth: fluid ? '100%' : theme.grid.maxWidth,
}));

export const Row = styled(Flex)({
  flex: '1 0 100%',
  flexWrap: 'wrap',
});

export const Col = styled(Box)({
  position: 'relative',
  width: '100%',
});
