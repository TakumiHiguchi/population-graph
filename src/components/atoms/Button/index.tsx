import { cx, css } from '@emotion/css';
import React, { FC } from 'react';
import { buttonWrapper } from './style';
import { ButtonDefaultType } from './types';

const Button: FC<ButtonDefaultType> = ({
	children,
	className = '',
	name = '',
	value = '',
	disabled = false,
	type = 'button',
	onClick,
}: ButtonDefaultType) => {
	return (
		<button
			className={cx(className, css(buttonWrapper))}
			type={type}
			name={name}
			value={value}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
