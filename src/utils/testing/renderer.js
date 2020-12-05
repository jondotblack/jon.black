/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from 'components/appProvider';

const Providers = ({ children }) => <AppProvider>{children}</AppProvider>;

const customRender = (ui, options) =>
  render(ui, {
    wrapper: Providers,
    ...options,
  });

// override render method
export { customRender as render };
