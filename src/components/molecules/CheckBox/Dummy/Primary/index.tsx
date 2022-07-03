import { FC } from 'react';
import { DummyPrimaryCheckBoxType } from './types';
import { checkBoxWrapper, checkBoxLabel } from './styles';
import { cx, css } from '@emotion/css';
import { backGroundColor } from 'styles/color';
import DummyArea from 'components/atoms/DummyArea';

export const Primary: FC<DummyPrimaryCheckBoxType> = ({
	className,
}: DummyPrimaryCheckBoxType) => {
	return (
		<div
			className={cx(css(checkBoxWrapper), className)}
			data-testid='checkbox-dummy-primary'
		>
			<label className={css(checkBoxLabel)}>
				<DummyArea
					width='4em'
					height='1em'
					colorTo={backGroundColor.secondary}
					colorFrom={backGroundColor.hover.secondary}
				/>
			</label>
		</div>
	);
};
