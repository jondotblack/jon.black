import React from 'react';
import { render } from 'utils/testing';
import { theme } from 'styles/theme';

import { Box } from '../index';

describe('Box', () => {
  const text = 'Hello World!';

  it('children elements are correctly rendering', () => {
    const { container } = render(<Box>{text}</Box>);
    expect(container.firstChild).toHaveTextContent(text);
  });

  it('styled system props should render correctly', () => {
    const { container } = render(<Box ml={3} color="white" bg="primary" />);

    const { firstChild } = container;
    expect(firstChild).toHaveStyle(`
      margin-left: ${theme.space[3]}px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    `);
  });

  it('style object should be passed through', () => {
    const { container } = render(
      <Box
        sx={{
          bg: 'primary',
          color: 'white',
          ml: 3,
        }}
      />,
    );

    const { firstChild } = container;
    expect(firstChild).toHaveStyle(`
      margin-left: ${theme.space[3]}px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    `);
  });
});
