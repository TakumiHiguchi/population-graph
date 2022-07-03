import { css } from '@emotion/css';
import Header from 'components/organisms/Header';
import React, { FC } from 'react';
import { defaultTemplateWrapper, defaultTemplateInner } from './styles';
import { DefaultTemplateProps } from './types';

const DefaultTemplate: FC<DefaultTemplateProps> = ({
	children,
}: DefaultTemplateProps) => {
	return (
		<main className={css(defaultTemplateWrapper)}>
			<Header />
			<div className={css(defaultTemplateInner)}>{children}</div>
		</main>
	);
};

export default DefaultTemplate;
