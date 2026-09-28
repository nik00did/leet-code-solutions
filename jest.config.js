/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/problems'],
  testMatch: ['**/*.test.ts'],
  clearMocks: true,
};
