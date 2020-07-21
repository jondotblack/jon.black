import React from 'react';

import { Box } from 'components/box';
import { Button } from '.';

export default { title: 'Components | Button' };

export const base = () => (
  <Box p={3}>
    <Button>Default button</Button>
    <br />
    <Button disabled>Disabled button</Button>
  </Box>
);
