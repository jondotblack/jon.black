import React from 'react';
import { render } from 'utils/testing';
import { theme } from 'styles/theme';

import { Container } from '..';

describe('Container', () => {
  const text = 'Hello World!';

  it('children elements are correctly rendering', () => {
    const { container } = render(<Container>{text}</Container>);
    expect(container.firstChild).toHaveTextContent(text);
  });

  it('should have max-width css prop from theme', () => {
    const { container } = render(<Container>{text}</Container>);

    const { firstChild } = container;
    expect(firstChild).toHaveStyle(`max-width: ${theme.grid.maxWidth}`);
  });

  it('fluid prop should set max-width to 100%', () => {
    const { container } = render(<Container fluid>{text}</Container>);

    const { firstChild } = container;
    expect(firstChild).toHaveStyle('max-width: 100%');
  });
});
