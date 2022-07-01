import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useCheckBox } from 'hooks/useInput';
import { Primary as Component } from './index';

export default {
	title: 'molecules/Checkbox',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	const checkbox = useCheckBox(false, '', 'テスト', false);
	return <Component {...args} {...checkbox} />;
};

export const Primary = Template.bind({});
Primary.args = {
	className: '',
	name: 'test',
	id: 'test',
};
