import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './List.styled';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const List = (props) => {
  return <Styled.List {...props} />;
};

List.propTypes = propTypes;

export default List;
