import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';
import React from 'react';
import { backGroundColor } from 'styles/color';

import { Toggle as Button } from './index';

export default {
	title: 'Molecules/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const DefaultTemplate: ComponentStory<typeof Button> = (args) => (
	<PaddingWrapper>
		<Button {...args} />
	</PaddingWrapper>
);

export const Toggle = DefaultTemplate.bind({});
Toggle.args = {
	children: <span>Button</span>,
	bgColorTrue: backGroundColor.pastel.bluePurple.bluePurple15,
	bgColorFalse: backGroundColor.primary,
};
