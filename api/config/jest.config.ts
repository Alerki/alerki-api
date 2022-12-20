import { Config } from 'jest';

const config: Config = {
  displayName: {
    name: 'Alerki',
    color: 'blueBright',
  },
  bail: 1,
  verbose: true,
  notify: true,
  moduleNameMapper: {
    '^@Config/(.*)$': '<rootDir>/config/$1',
    '^@Shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@Module/(.*)$': '<rootDir>/src/modules/$1',
    '^@Src/(.*)$': '<rootDir>/src/$1',
    '^@Test/(.*)$': '<rootDir>/test/$1',
  },
  testEnvironment: 'node',
  // testMatch: ['**/?(*.)+(spec|test|e2e-spec|e2e-spec).[jt]s?(x)'],
  testMatch: ['**/?(*.)+(e2e-spec-only).[jt]s?(x)'],
  preset: 'ts-jest',
  collectCoverageFrom: ['<rootDir>/src/**', '<rootDir>/config/**'],
};

export default config;
