module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  globals: {
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.json"
    }
  },
  coverageDirectory: '.coverage',
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/*.(test|spec).(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/.out/',
    '/deprecated/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/.out/',
    '/deprecated/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
