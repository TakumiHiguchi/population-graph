import {
	renderHook,
	render,
	screen,
	act,
	waitFor,
	fireEvent,
} from '@testing-library/react';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import Home from 'pages/index';
import { local } from 'utils/local';

describe('pages/indexのテスト', () => {
	it('ヘッダーが表示されていること', () => {
		const text = '都道府県別総人口推移グラフ';

		act(() => {
			render(<Home />);
		});

		const container = screen.queryByText(text);
		expect(container).toHaveTextContent(text);
	});

	it('ローディング時ダミーサイドバーが表示されること', async () => {
		act(() => {
			render(<Home />);
		});

		await waitFor(() => {
			const containers = screen.getAllByTestId('checkbox-dummy-primary');
			expect(containers.length > 0).toBeTruthy();
		});
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

	it('チャートが表示されていること', async () => {
		const text = 'Highcharts.com';

		act(() => {
			render(<Home />);
		});

		await waitFor(() => {
			const container = screen.queryByText(text);
			expect(container).toHaveTextContent(text);
		});
	});

	it('サイドバーのチェックボックスをチェックした時チャートが正しく表示されること', async () => {
		act(() => {
			render(<Home />);
		});

		const { result } = renderHook(() => usePrefecturesApi('test'));
		await waitFor(() => expect(result.current.data.length > 0).toBeTruthy());
		const prefecturesMock = result.current.data;

		await waitFor(() =>
			expect(screen.queryByText(prefecturesMock[0].prefName)).toHaveTextContent(
				prefecturesMock[0].prefName,
			),
		);

		const container = screen.getByText(prefecturesMock[0].prefName);
		act(() => {
			fireEvent.click(container);
		});

		await waitFor(() => {
			const chart = screen.getByTestId('chart');
			expect(chart).toHaveTextContent(prefecturesMock[0].prefName);
		});
	});

	it('サイドバーの地方ボタンをクリックした時チャートが正しく表示されること', async () => {
		act(() => {
			render(<Home />);
		});

		const { result } = renderHook(() => usePrefecturesApi('test'));
		await waitFor(() => expect(result.current.data.length > 0).toBeTruthy());
		const prefecturesMock = result.current.data;

		await waitFor(() =>
			expect(screen.queryByText(prefecturesMock[0].prefName)).toHaveTextContent(
				prefecturesMock[0].prefName,
			),
		);

		const container = screen.getByText('東北地方');

		act(() => {
			fireEvent.click(container);
		});

		const touhoku_prefectures = prefecturesMock.filter((d) =>
			local['tohoku'].includes(d.prefName),
		);

		const chart = screen.getByTestId('chart');
		touhoku_prefectures.forEach(async (pref) => {
			await waitFor(() => {
				expect(chart).toHaveTextContent(pref.prefName);
			});
		});
	});
});
