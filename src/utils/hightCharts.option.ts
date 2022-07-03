import {
	XAxisOptions,
	TitleOptions,
	ChartOptions,
	YAxisOptions,
	TooltipOptions,
	LegendOptions,
	PlotOptions,
	ResponsiveOptions,
} from 'highcharts';
import { backGroundColor } from 'styles/color';
import { fonts } from 'styles/font';

export const chart: ChartOptions = {
	backgroundColor: backGroundColor.primary,
	style: {
		fontFamily: fonts.default,
		fontSize: '1rem',
	},
};

export const title: TitleOptions = {
	text: '',
};

export const xAxis = (min: number, max: number): XAxisOptions => {
	return {
		title: {
			text: '年度',
		},
		gridLineWidth: 1,
		tickInterval: 5,
		min: min,
		max: max,
		crosshair: true,
	};
};

export const yAxis: YAxisOptions = {
	title: {
		text: '総人口（万人）',
	},
	minTickInterval: 50000,
	gridLineWidth: 1,
	labels: {
		formatter() {
			return `${(this.value as number) / 10000}`;
		},
	},
};

export const tooltip: TooltipOptions = {
	useHTML: true,
	formatter() {
		const value = (Math.round((this.y as number) / 1000) / 10).toFixed(1);
		return `
        <div>${this.x as number}年 ${this.series.name}</div>
        <div>
          <span style="color: ${this.color}; font-size: 1.5em">${value}</span>
          <span>万人</span>
        </div>`;
	},
	borderWidth: 0,
	borderRadius: 4,
	backgroundColor: '#fff',
};

export const legend: LegendOptions = {
	layout: 'horizontal',
	align: 'center',
	verticalAlign: 'bottom',
	itemStyle: {
		cursor: 'default',
		fontWeight: 'normal',
	},
	itemHoverStyle: {
		fontWeight: 'bold',
	},
	itemMarginBottom: 4,
};

export const plotOptions: PlotOptions = {
	series: {
		marker: {
			symbol: 'circle',
			fillColor: '#FFFFFF',
			lineWidth: 2,
			lineColor: undefined,
			radius: 5,
		},
	},
};

export const responsive: ResponsiveOptions = {
	rules: [
		{
			condition: {
				maxWidth: 500,
			},
			chartOptions: {
				xAxis: {
					title: {
						style: {
							fontSize: '0.8em',
						},
					},
				},
				yAxis: {
					title: {
						style: {
							fontSize: '0.8em',
						},
					},
				},
				legend: {
					layout: 'horizontal',
					align: 'center',
					verticalAlign: 'bottom',
					maxHeight: 40,
				},
			},
		},
	],
};
