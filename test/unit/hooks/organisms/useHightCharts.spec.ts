import { renderHook, act } from '@testing-library/react';
import { useHightCharts } from 'components/organisms/Chart/useHightCharts';
import { usePopulaionApi } from 'hooks/api/population/usePopulationApi';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import { removeResasAPIResponseType } from 'lib/api';
import { PopulationCompositionType, PrefectureType } from 'types';

describe('useHightChartsのテスト', () => {
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

	it('useHightChartsの戻り値のoptionsが適切であること', () => {
		const { result } = renderHook(() =>
			useHightCharts(populationMock, prefecturesMock),
		);
		expect(Object.keys(result.current.options).length > 0).toBeTruthy();
	});

	it('useHightChartsの戻り値のseriesが適切であること', () => {
		const { result } = renderHook(() =>
			useHightCharts(populationMock, prefecturesMock),
		);
		result.current.series.forEach((series, index) => {
			const totalPopulationDatas = Object.values(populationMock[index])[0]
				.data[0].data;
			const datas = totalPopulationDatas?.map((d) => [d.year, d.value]);

			expect(series.name).toBe(prefecturesMock[index].prefName);
			expect(series.data).toEqual(datas);
		});
	});
});
