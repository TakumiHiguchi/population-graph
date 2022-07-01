import { CheckBoxType as _CheckBoxType } from 'types/input';

export type PrimaryCheckBoxType = _CheckBoxType & {
	className?: string;
	id: string;
	name: string;
	disabled?: boolean;
};
