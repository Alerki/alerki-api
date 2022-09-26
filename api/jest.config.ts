import { Config } from 'jest';

import jestConfig from './config/jest.config';

const config: Config = {
  ...jestConfig,
  roots: ['./src'],
};

export default config;
