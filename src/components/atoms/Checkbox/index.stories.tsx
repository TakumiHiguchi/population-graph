import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useCheckBox } from 'hooks/useInput';
import Component from 'components/atoms/Checkbox/index';
import { PaddingWrapper } from '../StorybookPaddingWrapper';

export default {
	title: 'atoms/Checkbox',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	const checkbox = useCheckBox(false, '', 'テスト', false);
	return (
		<PaddingWrapper>
			<Component {...args} {...checkbox} />
		</PaddingWrapper>
	);
};

export const Checkbox = Template.bind({});
Checkbox.args = {
	className: '',
	name: 'test',
	id: 'test',
};
