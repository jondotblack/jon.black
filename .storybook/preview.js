import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';

import { withNextRouter } from 'storybook-addon-next-router';
import { Global } from '@emotion/core';
import { Styles } from 'styles/global';

import 'highlight.js/styles/github.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y);
addDecorator(withNextRouter());
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <Global styles={Styles} />
    {storyFn()}
  </ThemeProvider>
));
