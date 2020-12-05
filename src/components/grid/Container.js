import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Grid.styled';

const Container = (props) => <Styled.Container {...props} />;

Container.propTypes = {
  fluid: PropTypes.bool,
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
};

Container.defaultProps = {
  fluid: false,
  mx: 'auto',
  pl: {
    _: '1rem',
    lg: '6rem',
  },
  pr: {
    _: '1rem',
    lg: '3.5rem',
  },
};

export default Container;
