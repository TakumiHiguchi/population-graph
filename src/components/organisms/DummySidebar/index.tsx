import { cx, css } from '@emotion/css';
import Text from 'components/atoms/Text';
import { FC } from 'react';
import {
	sidebarWrapper,
	prefectureWrapper,
	prefectureH2,
} from 'components/organisms/Sidebar/styles';
import { DummySidebarType } from './types';
import * as CheckBox from 'components/molecules/CheckBox';

const DummySidebar: FC<DummySidebarType> = ({
	className,
}: DummySidebarType) => {
	return (
		<div className={cx(css(sidebarWrapper), className)}>
			<h2 className={css(prefectureH2)}>
				<Text text='都道府県' fontWeight='bold' fontSize='1.2em' />
			</h2>
			<div className={css(prefectureWrapper)}>
				{[...Array(47)].map((_, index) => (
					<CheckBox.DummyPrimary key={`dummy-checkbox-primary-${index}`} />
				))}
			</div>
			<h2 className={css(prefectureH2)}>
				<Text text='地方' fontWeight='bold' fontSize='1.2em' />
			</h2>
		</div>
	);
};

export default DummySidebar;
