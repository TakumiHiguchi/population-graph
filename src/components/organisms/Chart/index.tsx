import { FC, useRef } from 'react';
import { useHightCharts } from './useHightCharts';
import Presenter from './presenter';
import { ChartType } from './types';

const Chart: FC<ChartType> = ({
	populations,
	prefectures,
	...props
}: ChartType) => {
	const { series, options } = useHightCharts(populations, prefectures);

	return <Presenter series={series} options={options} {...props} />;
};

export default Chart;
