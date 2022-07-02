import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';
import React from 'react';

import { Secondary as Button } from './index';

export default {
	title: 'Molecules/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const DefaultTemplate: ComponentStory<typeof Button> = (args) => (
	<PaddingWrapper>
		<Button {...args} />
	</PaddingWrapper>
);
//
export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
	children: <span>Button</span>,
};
