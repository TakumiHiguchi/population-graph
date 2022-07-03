import { FC } from 'react';
import { LocalPickerPresenterType } from './types';
import * as Button from 'components/molecules/Button';
import Text from 'components/atoms/Text';

import { css } from '@emotion/css';
import { localPickerWrapper } from './style';
import { backGroundColor } from 'styles/color';

const LocalPickerPresenter: FC<LocalPickerPresenterType> = ({
	localNames,
	localFlags,
	onClickCheckBox,
}: LocalPickerPresenterType) => {
	return (
		<div className={css(localPickerWrapper)}>
			{Object.keys(localNames).map((key: string) => (
				<Button.Toggle
					key={`local-button-${key}`}
					toggle={localFlags[key]}
					bgColorTrue={backGroundColor.pastel.bluePurple.bluePurple15}
					bgColorFalse={backGroundColor.primary}
					onClick={() => onClickCheckBox(key)}
				>
					<Text text={localNames[key]} fontSize='0.9em' />
				</Button.Toggle>
			))}
		</div>
	);
};

export default LocalPickerPresenter;
