import { FC } from 'react';
import { CheckBoxType } from 'components/atoms/Checkbox/types';

const CheckBox: FC<CheckBoxType> = ({
	className,
	required,
	id,
	name,
	value,
	checked,
	disabled = false,
	onChange,
}: CheckBoxType) => {
	return (
		<input
			className={className}
			type='checkbox'
			id={id}
			name={name}
			disabled={disabled}
			required={required}
			value={value}
			checked={checked}
			onChange={onChange}
		/>
	);
};

export default CheckBox;
