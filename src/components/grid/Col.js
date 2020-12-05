import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'styles/theme';
import { generateProps } from './Grid.utils';

import * as Styled from './Grid.styled';

const Col = ({ offset, pull, push, span, ...rest }) => (
  <Styled.Col {...rest} {...generateProps({ offset, pull, push, span })} />
);

Col.propTypes = {
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),
  pull: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),
  push: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  ]),
};

Col.defaultProps = {
  offset: null,
  order: null,
  pull: null,
  push: null,
  px: `${theme.grid.gutter / 2}px`,
  span: null,
};

export default Col;
