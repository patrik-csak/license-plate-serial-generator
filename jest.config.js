/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
	// https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/#use-esm-presets
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts$': [
			'ts-jest',
			{
				useESM: true,
			},
		],
	},
};

export default config;
