import React from 'react';

import { AppProvider } from 'components/appProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
];

