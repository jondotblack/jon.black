/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, Global } from '@emotion/react';
import { theme } from 'styles/theme';
import { Styles } from 'styles/global';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={Styles} />
      {children}
    </ThemeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AppProvider;
