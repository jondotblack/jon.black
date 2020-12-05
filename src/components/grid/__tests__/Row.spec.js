import React from 'react';
import { render } from 'utils/testing';
import { theme } from 'styles/theme';

import { Row } from '..';

describe('Row', () => {
  const text = 'Hello World!';

  it('children elements are correctly rendering', () => {
    const { container } = render(<Row>{text}</Row>);
    expect(container.firstChild).toHaveTextContent(text);
  });

  it('should have gutter add to left and right margins', () => {
    const { container } = render(<Row>{text}</Row>);

    const { firstChild } = container;
    expect(firstChild).toHaveStyle(`
      margin-right: ${theme.grid.gutter / -2}px;
      margin-left: ${theme.grid.gutter / -2}px;
    `);
  });
});
