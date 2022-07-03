import {
	render,
	screen,
	renderHook,
	act,
	waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { PopulationCompositionType, PrefectureType } from 'types';
import { removeResasAPIResponseType } from 'lib/api';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import { usePopulaionApi } from 'hooks/api/population/usePopulationApi';
import Chart from 'components/organisms/Chart';

describe('organisms/Chartのテスト', () => {
	let prefecturesMock: PrefectureType[] = [];
	let populationMock: {
		[x: string]: PopulationCompositionType;
	}[] = [];

	beforeAll(async () => {
		const { result } = renderHook(() => usePrefecturesApi('test'));
		const population = renderHook(() => usePopulaionApi('test', [1]));

		await act(async () => {
			/* usePrefecturesApiからdataが帰ってくるまで待つ */
			await new Promise((resolve) => {
				setTimeout(resolve, 1000);
			});
		});

		populationMock = removeResasAPIResponseType<PopulationCompositionType>(
			population.result.current.data,
		);
		prefecturesMock = result.current.data;
	});

	it('チャートに凡例が表示されること', async () => {
		act(() => {
			render(
				<Chart
					populations={populationMock}
					prefectures={prefecturesMock}
					loading={false}
					nowLoadingDataCount={0}
				/>,
			);
		});

		await waitFor(() => {
			const firstPrefName =
				prefecturesMock[parseInt(Object.keys(populationMock[0])[0]) - 1]
					.prefName;
			const container = screen.queryByText(firstPrefName);
			expect(container).toHaveTextContent(firstPrefName);
		});

		populationMock.forEach((populationData) => {
			const prefName =
				prefecturesMock[parseInt(Object.keys(populationData)[0]) - 1].prefName;
			const container = screen.queryByText(prefName);
			expect(container).toHaveTextContent(prefName);
		});
	});

	it('ローディング時適切なテキストが表示されること', async () => {
		const text = '34件のデータを読み込み中...';

		act(() => {
			render(
				<Chart
					populations={populationMock}
					prefectures={prefecturesMock}
					loading={true}
					nowLoadingDataCount={34}
				/>,
			);
		});

		await waitFor(() => {
			const firstPrefName =
				prefecturesMock[parseInt(Object.keys(populationMock[0])[0]) - 1]
					.prefName;
			const container = screen.queryByText(firstPrefName);
			expect(container).toHaveTextContent(firstPrefName);
		});

		const container = screen.queryByText(text);
		expect(container).toHaveTextContent(text);
	});

	it('出典：RESAS（地域経済分析システム）という文字が画面上に反映されること', () => {
		act(() => {
			render(
				<Chart
					populations={populationMock}
					prefectures={prefecturesMock}
					loading={true}
					nowLoadingDataCount={34}
				/>,
			);
		});

		const container = screen.getByTestId('chart');
		expect(container).toHaveTextContent('出典：RESAS（地域経済分析システム）');
	});
});
