import CheckBox from 'components/atoms/Checkbox';
import { FC } from 'react';
import { PrimaryCheckBoxType } from './types';
import { checkBoxWrapper, checkBoxLabel, checkBox } from './styles';
import { cx, css } from '@emotion/css';
import Text from 'components/atoms/Text';

export const Primary: FC<PrimaryCheckBoxType> = ({
	className,
	...props
}: PrimaryCheckBoxType) => {
	return (
		<div className={cx(css(checkBoxWrapper), className)}>
			<CheckBox className={css(checkBox)} {...props} />
			<label className={css(checkBoxLabel)} htmlFor={props.id}>
				<Text text={props.label} />
			</label>
		</div>
	);
};
