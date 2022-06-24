module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts']
}

import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
};
export default config;