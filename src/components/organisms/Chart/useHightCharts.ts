import { useMemo } from 'react';
import { PopulationCompositionType, PrefectureType } from 'types';
import {
	chart,
	legend,
	plotOptions,
	responsive,
	title,
	tooltip,
	xAxis,
	yAxis,
} from 'utils/hightCharts.option';

export const useHightCharts = (
	populations: { [k: string]: PopulationCompositionType }[],
	prefectures: PrefectureType[],
) => {
	const xAxisValue = useMemo(() => {
		if (populations.length === 0) return { min: 1960, max: 2045 };
		const totalPopulationDatas = Object.values(populations[0])[0].data[0].data;
		return {
			min: totalPopulationDatas[0].year,
			max: totalPopulationDatas.at(-1)?.year || 2045,
		};
	}, [populations]);

	const options: Highcharts.Options = useMemo(() => {
		return {
			chart: chart,
			title: title,
			xAxis: xAxis(xAxisValue.min, xAxisValue.max),
			yAxis: yAxis,
			tooltip: tooltip,
			legend: legend,
			plotOptions: plotOptions,
			responsive: responsive,
		};
	}, [xAxisValue]);

	const series = useMemo(() => {
		return populations.map((populationData) => {
			const totalPopulationDatas =
				Object.values(populationData)[0].data[0].data;
			return {
				name: prefectures[parseInt(Object.keys(populationData)[0]) - 1]
					.prefName,
				data: totalPopulationDatas?.map((d) => [d.year, d.value]),
			};
		});
	}, [populations, prefectures]);

	return { series, options };
};
