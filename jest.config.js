module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.stories.{js,jsx}', '!**/node_modules/**'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
  moduleDirectories: ['node_modules', 'components', 'styles', 'utils', __dirname],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
