import { getArraysDiff } from 'lib/array';

describe('lib/arrayのテスト', () => {
	it('異なる値の要素を持つ配列を与えた時、差分が出力されること', () => {
		expect(getArraysDiff([1], [2])).toEqual([1, 2]);
	});

	it('一部に同じ要素を持つ配列を与えた時、差分が出力されること', () => {
		expect(getArraysDiff([1], [1, 2])).toEqual([2]);
	});

	it('同じ配列を与えた時、差分が出力されること', () => {
		expect(getArraysDiff([1], [1])).toEqual([]);
	});
});
