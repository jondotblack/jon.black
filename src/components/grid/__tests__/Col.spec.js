import React from 'react';
import { render } from 'utils/testing';
import { theme } from 'styles/theme';
import { toPercent } from '../Grid.utils';

import { Col } from '../index';

describe('Col', () => {
  const text = 'Hello World!';

  it('children elements are correctly rendering', () => {
    const { container } = render(<Col>{text}</Col>);
    expect(container.firstChild).toHaveTextContent(text);
  });

  it('should have gutter add to left and right margins', () => {
    const value = 3;
    const { container } = render(<Col span={value} offset={value} order={value} />);

    const { firstChild } = container;
    expect(firstChild).toHaveStyle(`
      margin-left: ${toPercent(value / theme.grid.columns)};
      padding-right: ${theme.grid.gutter / 2}px;
      padding-left: ${theme.grid.gutter / 2}px;
      max-width: ${toPercent(value / theme.grid.columns)};
      order: ${value};
    `);
  });
});
