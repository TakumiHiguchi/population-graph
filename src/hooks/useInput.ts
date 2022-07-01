import { ChangeEvent, useCallback, useState } from 'react';
import { CheckBoxType } from 'types/input';

const useCheckBox = (
	initialChecked: boolean,
	initialValue: string,
	initialLabel: string,
	required: boolean,
): CheckBoxType => {
	const [checked, setChecked] = useState<boolean>(initialChecked);
	const [value] = useState<string>(initialValue);
	const [label] = useState<string>(initialLabel);
	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	}, []);

	return {
		checked,
		value,
		label,
		required,
		onChange,
	};
};

export { useCheckBox };
