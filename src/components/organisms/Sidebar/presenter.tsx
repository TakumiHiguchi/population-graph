import { cx, css } from '@emotion/css';
import * as CheckBox from 'components/molecules/CheckBox';
import Text from 'components/atoms/Text';
import React, { FC } from 'react';
import {
	sidebarWrapper,
	prefectureWrapper,
	heddingWrapper,
	prefectureH2,
} from './styles';
import { SidebarPresenterType } from './types';

const SidebarPresenter: FC<SidebarPresenterType> = ({
	className,
	checkedPrefectures,
	handleCheckBoxClick,
	prefectures,
}: SidebarPresenterType) => {
	return (
		<aside className={cx(css(sidebarWrapper), className)}>
			<div className={css(heddingWrapper)}>
				<h2 className={css(prefectureH2)}>
					<Text text='都道府県' fontWeight='bold' fontSize='1.2em' />
				</h2>
			</div>
			<div className={css(prefectureWrapper)}>
				{prefectures.map((prefecture) => (
					<CheckBox.Primary
						key={`prefecture-${prefecture}`}
						id={`prefecture-${prefecture}`}
						name={`prefecture-${prefecture}`}
						label={prefecture}
						value={prefecture}
						required={false}
						checked={checkedPrefectures.includes(prefecture)}
						onChange={handleCheckBoxClick}
					/>
				))}
			</div>
		</aside>
	);
};

export default React.memo(SidebarPresenter);
