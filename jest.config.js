module.exports = {
  preset: '@ta-interaktiv/jest-preset',
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/functions/',
    '<rootDir>/src/config/',
    '<rootDir>/cfg/',
    '<rootDir>/node_modules/'
  ],
  setupFiles: ['<rootDir>/__mocks__/window.shim'],
  setupFilesAfterEnv: ['jest-enzyme'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    url:
      'https://interaktiv.tagesanzeiger.ch/2018/test-project/index.html?nosome&clientID=3467abc-332de'
  }
}
