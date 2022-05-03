import type { Config } from '@types/jest';

const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};

