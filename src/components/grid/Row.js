import React from 'react';
import { theme } from 'styles/theme';

import * as Styled from './Grid.styled';

const Row = (props) => <Styled.Row {...props} />;

Row.defaultProps = {
  mx: `${theme.grid.gutter / -2}px`,
};

export default Row;
