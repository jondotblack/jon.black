import React from 'react';
import { render } from 'utils/testing';

import { Flex } from '../index';

describe('Flex', () => {
  const text = 'Hello World!';

  it('children elements are correctly rendering', () => {
    const { container } = render(<Flex>{text}</Flex>);

    const { firstChild } = container;
    expect(firstChild).toHaveTextContent(text);
  });

  it('styled system props should render correctly', () => {
    const { container } = render(
      <Flex alignItems="center" justifyContent="center" order="3">
        {text}
      </Flex>,
    );

    const { firstChild } = container;
    expect(firstChild).toHaveStyle(`
      display: flex;
      justify-content: center;
      align-items: center;
      order: 3;
    `);
  });
});
