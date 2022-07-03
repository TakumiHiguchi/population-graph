import { renderHook, waitFor } from '@testing-library/react';
import { usePopulaionApi } from 'hooks/api/population/usePopulationApi';

describe('usePopulationsApiのテスト', () => {
	it('apiKeyが正しいとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePopulaionApi('test', [0]));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();

		await waitFor(() => expect(result.current.data.length > 0).toBe(true));

		expect(result.current.data.length > 0).toBeTruthy();
		expect(result.current.loading).toBeFalsy();
		expect(result.current.isError).toBeFalsy();
	});

	it('apiKeyが正しくないとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePopulaionApi('error', [0]));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();

		await waitFor(() => expect(result.current.isError).toBeTruthy());

		expect(result.current.data.length > 0).toBeFalsy();
		expect(result.current.loading).toBeFalsy();
		expect(result.current.isError).toBeTruthy();
	});

	it('apiKeyが空のとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePopulaionApi('', [0]));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();
		expect(result.current.data.length > 0).toBeFalsy();
	});
});
