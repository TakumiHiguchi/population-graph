import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';
import { Primary as Component } from './index';

export default {
	title: 'molecules/CheckBox/Dummy',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	return (
		<PaddingWrapper>
			<Component {...args} />
		</PaddingWrapper>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	className: '',
};
