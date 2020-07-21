import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './List.styled';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Item = (props) => {
  const { children } = props;

  return <Styled.Item>{children}</Styled.Item>;
};

Item.propTypes = propTypes;

export default Item;
