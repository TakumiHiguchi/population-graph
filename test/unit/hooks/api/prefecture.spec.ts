import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import { renderHook, waitFor } from '@testing-library/react';

describe('usePrefecturesApiのテスト', () => {
	it('apiKeyが正しいとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePrefecturesApi('usePrefecturesApi'));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();

		await waitFor(() => expect(result.current.data.length > 0).toBe(true));

		expect(result.current.data.length > 0).toBeTruthy();
		expect(result.current.loading).toBeFalsy();
		expect(result.current.isError).toBeFalsy();
	});

	it('apiKeyが正しくないとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePrefecturesApi('error'));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();

		await waitFor(() => expect(result.current.isError).toBeTruthy());

		expect(result.current.data.length > 0).toBeFalsy();
		expect(result.current.loading).toBeFalsy();
		expect(result.current.isError).toBeTruthy();
	});

	it('apiKeyが空のとき正しい値を返すこと', async () => {
		const { result } = renderHook(() => usePrefecturesApi(''));

		expect(result.current.loading).toBeTruthy();
		expect(result.current.isError).toBeFalsy();
		expect(result.current.data.length > 0).toBeFalsy();
	});
});
