import { ReactNode } from 'react';

export type ButtonDefaultType = {
	className?: string;
	name?: string;
	value?: string;
	disabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
	children?: ReactNode;

	onClick: () => void;
};
