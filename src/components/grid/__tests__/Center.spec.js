import React from 'react';
import { render } from 'utils/testing';
import { theme } from 'styles/theme';

import { Center } from '..';

describe('Center', () => {
  const text = 'Hello World!';

  it('children elements are correctly rendering', () => {
    const { container } = render(<Center>{text}</Center>);
    expect(container.firstChild).toHaveTextContent(text);
  });

  it('styled system props should render correctly', () => {
    const { container } = render(<Center ml={3} color="white" bg="primary" />);

    const { firstChild } = container;
    expect(firstChild).toHaveStyle(`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.white};
      margin-left: ${theme.space[3]}px;
    `);
  });
});
