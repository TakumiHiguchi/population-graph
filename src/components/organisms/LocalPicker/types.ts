export type LocalPickerType = {
	checkedPrefectures: string[];
	append: (prefectureName: string[]) => void;
	remove: (prefectureName: string[]) => void;
};

export type LocalPickerPresenterType = {
	local: { [k: string]: string[] };
	localNames: { [k: string]: string };
	localFlags: { [k: string]: boolean };
	onClickCheckBox: (key: string) => void;
};
