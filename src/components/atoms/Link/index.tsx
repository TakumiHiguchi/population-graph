import { cx, css } from '@emotion/css';
import React, { FC } from 'react';
import _Link from 'next/link';
import { linkWrapper } from './style';
import { LinkType } from './types';

const Link: FC<LinkType> = ({
	className = '',
	href = '',
	children,
}: LinkType) => {
	return (
		<_Link href={href} passHref>
			<a className={cx(css(linkWrapper, className))}>{children}</a>
		</_Link>
	);
};

export default Link;
