module.exports = {
  roots: ['<rootDir>/lib'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
}
