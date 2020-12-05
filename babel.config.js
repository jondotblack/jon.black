module.exports = {
  presets: ['next/babel', '@emotion/babel-preset-css-prop'],
  plugins: [
    'import-glob-array',
    'inline-react-svg',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx'],
        alias: {
          components: './src/components',
          data: './src/data',
          pages: './src/pages',
          static: './public/static',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
  ],
};
