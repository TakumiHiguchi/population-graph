import { ComponentStory, ComponentMeta } from '@storybook/react';
import { backGroundColor } from 'styles/color';
import { PaddingWrapper } from '../StorybookPaddingWrapper';
import Component from './index';

export default {
	title: 'atoms/DummyArea',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	return (
		<PaddingWrapper>
			<Component {...args} />
		</PaddingWrapper>
	);
};

export const DummyArea = Template.bind({});
DummyArea.args = {
	className: '',
	width: '100px',
	height: '56.25px',
	colorFrom: backGroundColor.secondary,
	colorTo: backGroundColor.hover.secondary,
};
