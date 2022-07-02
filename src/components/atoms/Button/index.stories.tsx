import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PaddingWrapper } from '../StorybookPaddingWrapper';

import _Button from './index';

export default {
	title: 'Atoms/Button',
	component: _Button,
} as ComponentMeta<typeof _Button>;

const DefaultTemplate: ComponentStory<typeof _Button> = (args) => (
	<PaddingWrapper>
		<_Button {...args} />
	</PaddingWrapper>
);

export const Button = DefaultTemplate.bind({});
Button.args = {
	children: <span>Button</span>,
};
