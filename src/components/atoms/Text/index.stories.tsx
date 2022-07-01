import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Component from './index';

export default {
	title: 'Atoms/Text',
	component: Component,
} as ComponentMeta<typeof Component>;

const DefaultTemplate: ComponentStory<typeof Component> = (args) => (
	<Component {...args} />
);

export const Text = DefaultTemplate.bind({});
Text.args = {
	text: 'SampleText',
};
