import { cx, css } from '@emotion/css';
import * as CheckBox from 'components/molecules/CheckBox';
import Text from 'components/atoms/Text';
import * as Button from 'components/molecules/Button';
import LocalPicker from '../LocalPicker';
import React, { FC } from 'react';
import {
	sidebarWrapper,
	prefectureWrapper,
	heddingWrapper,
	prefectureH2,
	prefectureAllSelecterButton,
	prefectureCreatedWrapper,
} from './styles';
import { SidebarPresenterType } from './types';
import { textColor } from 'styles/color';
import Link from 'components/atoms/Link';

const SidebarPresenter: FC<SidebarPresenterType> = ({
	className,
	checkedPrefectures,
	handleCheckBoxClick,
	allClear,
	allSelect,
	append,
	remove,
	prefectures,
}: SidebarPresenterType) => {
	return (
		<aside className={cx(css(sidebarWrapper), className)}>
			<div className={css(heddingWrapper)}>
				<h2 className={css(prefectureH2)}>
					<Text text='都道府県' fontWeight='bold' fontSize='1.2em' />
				</h2>
				<div>
					<Button.Secondary
						className={css(prefectureAllSelecterButton)}
						onClick={allClear}
					>
						<Text
							text='全解除'
							color={textColor.pastel.bluePurple.bluePurple15}
							fontSize='0.9em'
						/>
					</Button.Secondary>
					<Button.Primary
						className={css(prefectureAllSelecterButton)}
						onClick={allSelect}
					>
						<Text text='全選択' color={textColor.white} fontSize='0.9em' />
					</Button.Primary>
				</div>
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
			<h2 className={css(prefectureH2)}>
				<Text text='地方' fontWeight='bold' fontSize='1.2em' />
			</h2>
			<LocalPicker
				checkedPrefectures={checkedPrefectures}
				append={append}
				remove={remove}
			/>
			<div className={css(prefectureCreatedWrapper)}>
				<Text text='created by ' color={textColor.secondary} fontSize='0.8em' />
				<Link href='https://takumihiguchi.portfolio.branchwith.jp/'>
					<Text
						text='TakumiHiguchi'
						color={textColor.secondary}
						fontSize='0.8em'
					/>
				</Link>
			</div>
		</aside>
	);
};

export default React.memo(SidebarPresenter);
