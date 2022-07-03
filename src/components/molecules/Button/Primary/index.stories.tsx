import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';
import React from 'react';

import { Primary as Button } from './index';

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
export const Primary = DefaultTemplate.bind({});
Primary.args = {
	children: <span>Button</span>,
};
