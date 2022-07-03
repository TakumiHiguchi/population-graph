import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PaddingWrapper } from '../StorybookPaddingWrapper';
import Component from './index';

export default {
	title: 'Atoms/Text',
	component: Component,
} as ComponentMeta<typeof Component>;

const DefaultTemplate: ComponentStory<typeof Component> = (args) => (
	<PaddingWrapper>
		<Component {...args} />
	</PaddingWrapper>
);

export const Text = DefaultTemplate.bind({});
Text.args = {
	text: 'SampleText',
};
