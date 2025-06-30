import js from '@eslint/js';
import next from 'eslint-config-next';

export default [
  js.config({
    extends: [
      'eslint:recommended',
    ],
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  }),
  ...next,
  {
    ignores: [
      'node_modules',
      '.next',
      'dist',
      'out',
      'build',
      '**/*.d.ts',
    ],
  },
]; 