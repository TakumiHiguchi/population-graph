import { cx, css } from '@emotion/css';
import React, { FC } from 'react';
import { textWrapper } from './style';
import { TextType } from './types';

const Text: FC<TextType> = ({ className = '', text, ...props }: TextType) => {
	return <span className={cx(css(textWrapper(props), className))}>{text}</span>;
};

export default Text;
