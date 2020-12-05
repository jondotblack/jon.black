import styled from '@emotion/styled';

import { Flex } from 'components/grid';

export const Weather = styled(Flex)`
  align-items: center;

  span {
    display: inline-block;
    width: 25px;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
  max-width: 40px;
`;
