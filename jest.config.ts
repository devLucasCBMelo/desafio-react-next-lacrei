import 'ts-node/register';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Caminho para o diretório do Next.js
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  preset: "ts-jest",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

export default createJestConfig(customJestConfig);
