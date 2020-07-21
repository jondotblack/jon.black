import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Input.styled';

const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const defaultProps = {
  type: 'text',
};

const Input = (props) => {
  const { name, type, ...remainingProps } = props;

  return <Styled.Input name={name} type={type} aria-label={name} {...remainingProps} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
