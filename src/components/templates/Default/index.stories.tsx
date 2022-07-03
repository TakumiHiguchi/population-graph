import { css } from '@emotion/css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { sidebarWrapper } from 'components/organisms/Sidebar/styles';
import Component from 'components/templates/Default';

export default {
	title: 'template/Default',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	return <Component {...args} />;
};

export const TopPage = Template.bind({});
TopPage.args = {
	children: (
		<>
			<div>Chart</div>
			<div className={css(sidebarWrapper)}>Sidebar</div>
		</>
	),
};
