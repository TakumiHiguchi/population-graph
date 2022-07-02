import { css, cx } from '@emotion/css';
import Button from 'components/atoms/Button';
import { FC } from 'react';
import { buttonToggle } from './styles';
import { ButtonToggleType } from './types';

export const Toggle: FC<ButtonToggleType> = ({
	className,
	toggle,
	bgColorTrue,
	bgColorFalse,
	...props
}: ButtonToggleType) => {
	return (
		<Button
			className={cx(
				css(buttonToggle(toggle, bgColorTrue, bgColorFalse)),
				className,
			)}
			{...props}
		/>
	);
};
