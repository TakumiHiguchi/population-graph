import { css, cx } from '@emotion/css';
import Button from 'components/atoms/Button';
import { FC } from 'react';
import { buttonSecondary } from './styles';
import { ButtonSecondaryType } from './types';

export const Secondary: FC<ButtonSecondaryType> = ({
	className,
	...props
}: ButtonSecondaryType) => {
	return <Button className={cx(css(buttonSecondary), className)} {...props} />;
};
