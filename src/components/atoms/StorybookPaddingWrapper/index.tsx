import { css } from '@emotion/css';
import { FC } from 'react';
import { paddingWrapper } from './styles';
import { StorybookPaddingWrapperType } from './types';

export const PaddingWrapper: FC<StorybookPaddingWrapperType> = ({
	children,
}: StorybookPaddingWrapperType) => {
	return <div className={css(paddingWrapper)}>{children}</div>;
};
