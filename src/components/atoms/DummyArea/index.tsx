import { css, cx } from '@emotion/css';
import { FC } from 'react';
import { dummyAreaWrapper } from './styles';
import { DummyAreaType } from './types';

const DummyArea: FC<DummyAreaType> = ({
	className,
	width,
	height,
	colorFrom,
	colorTo,
}: DummyAreaType) => {
	return (
		<div
			className={cx(
				className,
				css(dummyAreaWrapper(width, height, colorFrom, colorTo)),
			)}
			data-testid='dummy-area'
		/>
	);
};

export default DummyArea;
