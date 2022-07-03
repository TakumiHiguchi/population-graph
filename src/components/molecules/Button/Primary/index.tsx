import { css, cx } from '@emotion/css';
import Button from 'components/atoms/Button';
import { FC } from 'react';
import { buttonPrimary } from './styles';
import { ButtonPrimaryType } from './types';

export const Primary: FC<ButtonPrimaryType> = ({
	className,
	...props
}: ButtonPrimaryType) => {
	return <Button className={cx(css(buttonPrimary), className)} {...props} />;
};
