import React, { forwardRef } from 'react';

import * as Styled from './Grid.styled';

const Box = forwardRef((props, ref) => <Styled.Box ref={ref} {...props} />);

export default Box;
