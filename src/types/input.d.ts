import { Dispatch, SetStateAction, ChangeEvent } from 'react';

export type CheckBoxPropsType = {
	initialValue: boolean;
	initialLabel: string;
	required: boolean;
};

export type CheckBoxType = {
	value: string;
	checked: boolean;
	label: string;
	required: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
