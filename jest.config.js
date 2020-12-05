module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/pages/**/*.{js,jsx}',
    '!src/**/*.stories.{js,jsx}',
    '!**/node_modules/**',
  ],
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
  setupFilesAfterEnv: ['<rootDir>/src/utils/testing/setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  verbose: true,
};
