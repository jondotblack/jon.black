import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';

import * as Styled from './Grid.styled';

const Row = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Row {...props} />
    </ThemeProvider>
  );
};

Row.displayName = 'Row';

export default Row;
