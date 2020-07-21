import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Box, Flex } from '.';

export default { title: 'Components | Box', decorators: [withKnobs] };

const MockItem = (props) => <Box p={3} style={{ backgroundColor: '#ccc' }} {...props} />;

const veritcalOptions = {
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const horizontalOptions = {
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
  center: 'center',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
};

export const base = () => (
  <Box>
    <MockItem>one</MockItem>
    <MockItem>two</MockItem>
    <MockItem>three</MockItem>
  </Box>
);

export const flex = () => (
  <Flex>
    <MockItem>one</MockItem>
    <MockItem>two</MockItem>
    <MockItem>three</MockItem>
  </Flex>
);

export const flexAlignment = () => (
  <Flex
    alignItems={select('Vertical', veritcalOptions, 'center')}
    justifyContent={select('Horizontal', horizontalOptions, 'center')}
    style={{ backgroundColor: '#eee', 'min-height': '10rem' }}
  >
    <MockItem>one</MockItem>
    <MockItem>two</MockItem>
    <MockItem>three</MockItem>
  </Flex>
);

export const spacing = () => (
  <Box>
    <MockItem mb={3}>one</MockItem>
    <MockItem mx={5}>two</MockItem>
    <MockItem mt={4}>three</MockItem>
  </Box>
);
