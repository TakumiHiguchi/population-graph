import { ChangeEvent } from 'react';
import { PrefectureType } from 'types';

export type SidebarType = {
	className?: string;
	prefectures: PrefectureType[];
	handleChangeCheckBoxState: (prefectureIds: number[]) => void;
};

export type SidebarPresenterType = {
	className?: string;
	prefectures: string[];
	checkedPrefectures: string[];
	handleCheckBoxClick: (event: ChangeEvent<HTMLInputElement>) => void;
	allSelect: () => void;
	allClear: () => void;
	append: (prefectureName: string[]) => void;
	remove: (prefectureName: string[]) => void;
};
