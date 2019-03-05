module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/*.(test|spec).(js|jsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/.out/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/.out/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
