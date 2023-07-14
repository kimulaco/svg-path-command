import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1',
  },
  transform: {
    '^.+//ts$': 'ts-jest',
  },
  testMatch: ['/**/*.spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/lib/**/*.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/lib/PathCommand/test/helpers/testPathCommand.ts',
  ],
}

export default config
