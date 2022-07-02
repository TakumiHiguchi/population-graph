import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Component from './index';

export default {
	title: 'organisms/Header',
	component: Component,
} as ComponentMeta<typeof Component>;

const DefaultTemplate = () => <Component />;

export const Header = DefaultTemplate.bind({});
