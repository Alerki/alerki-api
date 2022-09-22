export default {
  moduleNameMapper: {
    '^@Config/(.*)$': '<rootDir>/config/$1',
    '^@Shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@Module/(.*)$': '<rootDir>/src/module/$1',
  },
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test|e2e-spec).[jt]s?(x)'],
  preset: 'ts-jest',
};
