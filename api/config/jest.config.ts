import { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '^@Config/(.*)$': '<rootDir>/config/$1',
    '^@Shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@Module/(.*)$': '<rootDir>/src/module/$1',
    '^@Src/(.*)$': '<rootDir>/src/$1',
    '^@Test/(.*)$': '<rootDir>/test/$1',
  },
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test|e2e-spec).[jt]s?(x)'],
  preset: 'ts-jest',
  collectCoverageFrom: ['<rootDir>/src/**', '<rootDir>/config/**'],
};

export default config;
