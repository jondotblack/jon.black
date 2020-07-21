import styled from '@emotion/styled';
import propTypes from '@styled-system/prop-types';
import { color, flexbox, layout, space } from 'styled-system';

const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;

Flex.propTypes = {
  ...propTypes.flexbox,
};

export default Flex;
