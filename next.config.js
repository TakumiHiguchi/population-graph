/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		RESAS_ENDPOINT: 'https://opendata.resas-portal.go.jp',
	},
};

module.exports = nextConfig;
