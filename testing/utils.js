import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';
import { Styles } from 'styles/global';

/* 
  for Jest screenshots wrap with ThemeProvider
*/
export const rendererWithTheme = (component) => {
  return renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

/* 
  for react-testing-library wrap with ThemeProvider
  docs: https://testing-library.com/docs/react-testing-library/setup#custom-render
*/
const AllTheProviders = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={Styles} />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
