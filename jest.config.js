const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['./test/jest.setup.ts'],
	globalSetup: './test/setupEnv.ts',
	moduleNameMapper: {
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^pages/(.*)$': '<rootDir>/src/pages/$1',
		'^utils/(.*)$': '<rootDir>/src/utils/$1',
		'^hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^types/(.*)$': '<rootDir>/src/types/$1',
		'^lib/(.*)$': '<rootDir>/src/lib/$1',
		'^mock/(.*)$': '<rootDir>/src/mock/$1',
		'^styles': '<rootDir>/src/styles',
	},
};

module.exports = createJestConfig(customJestConfig);
