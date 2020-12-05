import React, { forwardRef } from 'react';

import * as Styled from './Grid.styled';

const Flex = forwardRef((props, ref) => <Styled.Flex ref={ref} {...props} />);

Flex.propTypes = {};
Flex.defaultProps = {};

export default Flex;
