import { generateCacheKey } from 'lib/cacheKey';

describe('cacheKeyのテスト', () => {
	it('idを指定した時正しいKeyが生成できること', () => {
		const apiName = 'testAPI';
		const apiKey = 'dgleqrgeruigl';
		const id = 1;

		expect(generateCacheKey(apiName, apiKey, id)).toBe(
			`${apiName}-${apiKey.slice(0, 5)}-${id}`,
		);
	});

	it('idを指定しなかった時正しいKeyが生成できること', () => {
		const apiName = 'testAPI';
		const apiKey = 'dgleqrgeruigl';

		expect(generateCacheKey(apiName, apiKey)).toBe(
			`${apiName}-${apiKey.slice(0, 5)}-index`,
		);
	});
});
