import {
	renderHook,
	render,
	screen,
	act,
	waitFor,
} from '@testing-library/react';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import Home from 'pages/index';

describe('pages/indexのテスト', () => {
	it('ヘッダーが表示されていること', () => {
		const text = '都道府県別総人口推移グラフ';

		act(() => {
			render(<Home />);
		});

		const container = screen.queryByText(text);
		expect(container).toHaveTextContent(text);
	});

	it('サイドバーが画面上に表示されていること', async () => {
		const { result } = renderHook(() => usePrefecturesApi('test'));

		await waitFor(() => expect(result.current.data.length > 0).toBeTruthy());

		const prefecturesMock = result.current.data;

		act(() => {
			render(<Home />);
		});

		await waitFor(() =>
			expect(screen.queryByText(prefecturesMock[0].prefName)).toHaveTextContent(
				prefecturesMock[0].prefName,
			),
		);

		prefecturesMock.map((prefecture) => {
			const container = screen.queryByText(prefecture.prefName);
			expect(container).toHaveTextContent(prefecture.prefName);
		});
	});
});
