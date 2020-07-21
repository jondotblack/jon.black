const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias.src = path.resolve(__dirname, '../src');
    config.resolve.alias.components = path.resolve(__dirname, '../src/components');
    config.resolve.alias.pages = path.resolve(__dirname, '../src/pages');
    config.resolve.alias.styles = path.resolve(__dirname, '../src/styles');
    config.resolve.alias.utils = path.resolve(__dirname, '../src/utils');

    return config;
  },
};
