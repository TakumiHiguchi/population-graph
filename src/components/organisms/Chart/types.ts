import { PopulationCompositionType, PrefectureType } from 'types';

export type ChartType = {
	populations: { [k: string]: PopulationCompositionType }[];
	prefectures: PrefectureType[];
	loading: boolean;
	nowLoadingDataCount: number;
};

export type ChartPresenterType = {
	options: Highcharts.Options | undefined;
	series: SeriesType[];
	loading: boolean;
	nowLoadingDataCount: number;
};

type SeriesType = {
	data: number[][] | never[];
	showInLegend?: boolean;
};
