import { getPrefectures } from 'lib/api';
import { isResasAPIFaildResponseType } from 'lib/typeGuard/api';

describe('prefectureAPIのテスト', () => {
	it('x-api-keyが正しく設定されている時、都道府県のデータが返ってくること', async () => {
		const res = await getPrefectures('test');

		expect(isResasAPIFaildResponseType(res)).toBe(false);
	});

	it('x-api-keyが正しく設定されていない時、エラーデータが返ってくること', async () => {
		const res = await getPrefectures('');

		expect(isResasAPIFaildResponseType(res)).toBe(true);
	});
});
