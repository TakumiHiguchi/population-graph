import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from '@emotion/css';
import Component from './index';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';

export default {
	title: 'organisms/DummySidebar',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	return (
		<PaddingWrapper>
			<Component {...args} />
		</PaddingWrapper>
	);
};

export const DummySidebar = Template.bind({});
DummySidebar.args = {
	className: '',
};
