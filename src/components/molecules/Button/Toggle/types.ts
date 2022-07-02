import { ReactNode } from 'react';

export type ButtonToggleType = {
	className?: string;
	toggle: boolean;
	bgColorTrue: string;
	bgColorFalse: string;
	name?: string;
	value?: string;
	disabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
	children?: ReactNode;

	onClick: () => void;
};
