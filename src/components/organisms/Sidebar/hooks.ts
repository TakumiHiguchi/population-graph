import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { PrefectureType } from 'types';

export const usePrefecturesCheckBox = (prefectures: PrefectureType[]) => {
	const [checkedPrefectures, _setCheckedPrefectures] = useState<string[]>([]);
	const prefectureNames = useMemo(
		() => prefectures.map((prefecture) => prefecture.prefName),
		[prefectures],
	);

	const checkedPrefectureIds = (data: string[]) => {
		const checkedPrefectureHash = prefectures.filter((prefecture) =>
			data.includes(prefecture.prefName),
		);
		return checkedPrefectureHash.map((prefecture) => prefecture.prefCode);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (!e.target.checked || checkedPrefectures.includes(value)) {
			return removeCheckedPrefectures([value]);
		} else {
			return appendCheckedPrefectures([value]);
		}
	};

	const setCheckedPrefectures = useCallback(
		(value: string[]) => {
			_setCheckedPrefectures(value);
			return checkedPrefectureIds(value);
		},
		[checkedPrefectureIds],
	);

	const appendCheckedPrefectures = useCallback(
		(value: string[]) => {
			const append = value.filter(
				(d) => !checkedPrefectures.includes(d) && prefectureNames.includes(d),
			);
			const next = [...checkedPrefectures, ...append];
			_setCheckedPrefectures(next);
			return checkedPrefectureIds(next);
		},
		[checkedPrefectures, prefectureNames],
	);

	const removeCheckedPrefectures = useCallback(
		(value: string[]) => {
			const next = checkedPrefectures.filter((d) => !value.includes(d));
			_setCheckedPrefectures(next);
			return checkedPrefectureIds(next);
		},
		[checkedPrefectures],
	);

	return {
		checkedPrefectures,
		prefectureNames,
		setCheckedPrefectures,
		appendCheckedPrefectures,
		removeCheckedPrefectures,
		onChange,
	};
};
