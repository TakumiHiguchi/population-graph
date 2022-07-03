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

		const xAxis = result.current.options.xAxis;
		if (typeof xAxis != 'undefined' && !Array.isArray(xAxis)) {
			const totalPopulationDatas = Object.values(populationMock[0])[0].data[0]
				.data;
			expect(xAxis.min).toBe(totalPopulationDatas[0].year);
			expect(xAxis.max).toBe(totalPopulationDatas.at(-1)?.year || 2045);
		}
	});

	it('populationがから配列の時useHightChartsの戻り値のoptionsが適切であること', () => {
		const { result } = renderHook(() => useHightCharts([], prefecturesMock));
		expect(Object.keys(result.current.options).length > 0).toBeTruthy();

		const xAxis = result.current.options.xAxis;
		if (typeof xAxis != 'undefined' && !Array.isArray(xAxis)) {
			expect(xAxis.min).toBe(1960);
			expect(xAxis.max).toBe(2045);
		}
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
