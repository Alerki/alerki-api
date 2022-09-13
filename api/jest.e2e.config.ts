import jestConfig from './config/jest.config';

export default {
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
