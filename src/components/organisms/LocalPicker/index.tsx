import { FC, useMemo } from 'react';
import Presenter from './presenter';
import { LocalPickerType } from './types';
import { local, localNames } from 'utils/local';

const LocalPicker: FC<LocalPickerType> = ({
	append,
	remove,
	checkedPrefectures,
}: LocalPickerType) => {
	const localFlags = useMemo(
		() =>
			/* 各地方の都道府県が全て選択されているかどうかを [localNametype]: booleanの形で返す　*/
			Object.keys(local)
				.map((l: string) => {
					const result = local[l].map((d) => checkedPrefectures.includes(d));
					return { [l]: result.every((bool: boolean) => bool) };
				})
				.reduce((l, b) => Object.assign(l, b), {}),
		[checkedPrefectures],
	);

	return (
		<Presenter
			local={local}
			localFlags={localFlags}
			localNames={localNames}
			onClickCheckBox={(key: string) =>
				localFlags[key] ? remove(local[key]) : append(local[key])
			}
		/>
	);
};

export default LocalPicker;
