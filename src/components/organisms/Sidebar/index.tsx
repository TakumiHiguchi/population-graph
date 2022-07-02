import React, { FC } from 'react';
import { SidebarType } from './types';
import Presenter from './presenter';
import { usePrefecturesCheckBox } from './hooks';

const Sidebar: FC<SidebarType> = ({
	prefectures,
	handleChangeCheckBoxState,
	...props
}: SidebarType) => {
	const { checkedPrefectures, prefectureNames, actions } =
		usePrefecturesCheckBox(prefectures);

	return (
		<Presenter
			prefectures={prefectureNames}
			checkedPrefectures={checkedPrefectures}
			handleCheckBoxClick={(event) =>
				handleChangeCheckBoxState(actions.onChange(event))
			}
			{...props}
		/>
	);
};

export default React.memo(Sidebar);
