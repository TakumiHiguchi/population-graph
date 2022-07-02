import React, { FC } from 'react';
import { SidebarType } from './types';
import Presenter from './presenter';
import { usePrefecturesCheckBox } from './hooks';

const Sidebar: FC<SidebarType> = ({
	prefectures,
	handleChangeCheckBoxState,
	...props
}: SidebarType) => {
	const { checkedPrefectures, prefectureNames, onChange } =
		usePrefecturesCheckBox(prefectures);

	return (
		<Presenter
			prefectures={prefectureNames}
			checkedPrefectures={checkedPrefectures}
			handleCheckBoxClick={(event) =>
				handleChangeCheckBoxState(onChange(event))
			}
			{...props}
		/>
	);
};

export default React.memo(Sidebar);
