import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';
import { useCheckBox } from 'hooks/useInput';
import { Primary as Component } from './index';

export default {
	title: 'molecules/Checkbox',
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

export const Primary = Template.bind({});
Primary.args = {
	className: '',
	name: 'test',
	id: 'test',
};
