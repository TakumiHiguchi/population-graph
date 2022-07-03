import { ReactNode } from 'react';

export type ButtonSecondaryType = {
	className?: string;
	name?: string;
	value?: string;
	disabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
	children?: ReactNode;

	onClick: () => void;
};
