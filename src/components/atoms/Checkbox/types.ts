import { ChangeEvent } from 'react';

export type CheckBoxType = {
	className?: string;
	id: string;
	name: string;
	disabled?: boolean;
	value: string;
	checked: boolean;
	required: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
