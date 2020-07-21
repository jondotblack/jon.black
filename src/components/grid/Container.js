import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';

import * as Styled from './Grid.styled';

const propTypes = {
  fluid: PropTypes.bool,
};

const defaultProps = {
  fluid: false,
};

const Container = (props) => {
  const { fluid, ...remainingProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <Styled.Container fluid={fluid} {...remainingProps} />{' '}
    </ThemeProvider>
  );
};

Container.displayName = 'Container';

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
