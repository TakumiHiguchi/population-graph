import { renderHook, waitFor, act } from '@testing-library/react';
import { usePopulaionDatas } from 'pages/usePopulationDatas';

describe('usePopulationDataのテスト', () => {
	it('setPopulationDatasでpopulationデータを取得できること', async () => {
		const { result } = renderHook(() => usePopulaionDatas('test'));
		act(() => {
			result.current.actions.setPopulationDatas([0]);
		});

		await waitFor(() => expect(result.current.data.length > 0).toBeTruthy());

		expect(result.current.data.length == 1).toBeTruthy();
	});

	it('setPopulationDatasでキャッシュが含まれていた場合キャッシュを含めて正しいデータが返ってくること', async () => {
		const { result } = renderHook(() => usePopulaionDatas('test'));
		act(() => {
			result.current.actions.setPopulationDatas([0]);
		});

		await waitFor(() => expect(result.current.data.length > 0).toBeTruthy());

		act(() => {
			result.current.actions.setPopulationDatas([0]);
		});

		await waitFor(() => expect(result.current.data.length > 0).toBeTruthy());

		expect(result.current.data.length == 1).toBeTruthy();
	});

	it('apiKeyが正しくないとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePopulaionDatas('error'));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();

		act(() => {
			result.current.actions.setPopulationDatas([0]);
		});

		await waitFor(() => expect(result.current.isError).toBeTruthy());

		expect(result.current.data.length > 0).toBeFalsy();
		expect(result.current.loading).toBeFalsy();
		expect(result.current.isError).toBeTruthy();
	});

	it('apiKeyが空のとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePopulaionDatas(''));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();
		expect(result.current.data.length > 0).toBeFalsy();
	});
});
