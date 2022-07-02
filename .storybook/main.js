const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	staticDirs: ['../public'],
	env: (config) => ({
		...config,
		RESAS_ENDPOINT: 'https://opendata.resas-portal.go.jp',
	}),
	webpackFinal: async (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					components: path.resolve(__dirname, '../src/components'),
					pages: path.resolve(__dirname, '../src/pages'),
					hooks: path.resolve(__dirname, '../src/hooks'),
					styles: path.resolve(__dirname, '../src/styles'),
					lib: path.resolve(__dirname, '../src/lib'),
					utils: path.resolve(__dirname, '../src/utils'),
				},
			},
		};
	},
};
