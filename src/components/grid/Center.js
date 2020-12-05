import React, { forwardRef } from 'react';
import Flex from './Flex';

const Center = forwardRef((props, ref) => (
  <Flex alignItems="center" justifyContent="center" ref={ref} {...props} />
));

export default Center;
