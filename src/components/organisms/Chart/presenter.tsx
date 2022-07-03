import { css } from '@emotion/css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import ReactLoading from 'react-loading';
import React, { FC } from 'react';
import {
	ChartWrapper,
	loadingArea,
	loadingSpinner,
	sourceTextWrapper,
} from './styles';
import { ChartPresenterType } from './types';
import { backGroundColor, textColor } from 'styles/color';
import Text from 'components/atoms/Text';
import Link from 'components/atoms/Link';

const ChartPresenter: FC<ChartPresenterType> = ({
	options,
	loading,
	series,
	nowLoadingDataCount,
}: ChartPresenterType) => {
	if (typeof window !== `undefined`) {
		highchartsAccessibility(Highcharts);
	}
	return (
		<div className={css(ChartWrapper)} data-testid='chart'>
			<div className={css(loadingArea(loading && nowLoadingDataCount > 0))}>
				<ReactLoading
					className={css(loadingSpinner)}
					type='spinningBubbles'
					color={backGroundColor.pastel.bluePurple.bluePurple15}
					height={16}
					width={16}
				/>
				<Text
					text={`${nowLoadingDataCount}件のデータを読み込み中...`}
					color={backGroundColor.pastel.bluePurple.bluePurple15}
					fontSize='0.8em'
					lineHeight='20px'
				/>
			</div>
			<HighchartsReact
				containerProps={{ style: { height: '100%' } }}
				highcharts={Highcharts}
				options={{ ...options, series: series }}
			/>
			<div className={css(sourceTextWrapper)}>
				<Text
					text='出典：RESAS（地域経済分析システム）'
					color={textColor.secondary}
					fontSize='0.6em'
				/>
			</div>
		</div>
	);
};

export default ChartPresenter;
