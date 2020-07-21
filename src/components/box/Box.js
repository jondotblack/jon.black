import styled from '@emotion/styled';
import propTypes from '@styled-system/prop-types';
import { color, flexbox, layout, space } from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;

Box.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
};

export default Box;
