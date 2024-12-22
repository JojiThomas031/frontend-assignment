module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ]
  };