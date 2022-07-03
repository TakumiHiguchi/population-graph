import { getPopulation } from 'lib/api';
import { isResasAPIFaildResponseType } from 'lib/typeGuard/api';

describe('populationAPIのテスト', () => {
	it('x-api-keyが正しく設定されている時、都道府県のデータが返ってくること', async () => {
		const res = await getPopulation('test', 0);

		expect(isResasAPIFaildResponseType(res)).toBe(false);
	});

	it('x-api-keyが正しく設定されていない時、エラーデータが返ってくること', async () => {
		const res = await getPopulation('', 0);

		expect(isResasAPIFaildResponseType(res)).toBe(true);
	});
});
