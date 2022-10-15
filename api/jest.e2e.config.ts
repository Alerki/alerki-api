import { Config } from 'jest';

import jestConfig from './config/jest.config';

const config: Config = {
  ...jestConfig,
  roots: ['./test'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testTimeout: 30000,
};

export default config;
