import { Config } from 'jest';

import jestConfig from './config/jest.config';

const config: Config = {
  ...jestConfig,
  roots: ['./test'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

export default config;
