import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from '@emotion/css';
import Component from './index';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';

export default {
	title: 'organisms/Sidebar',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY
		? process.env.NEXT_PUBLIC_API_KEY
		: '';
	const { data, loading, isError } = usePrefecturesApi(apiKey);

	if (!loading && !isError) {
		return (
			<PaddingWrapper>
				<div className={css(`height: 100%`)}>
					<Component {...args} prefectures={data} />
				</div>
			</PaddingWrapper>
		);
	} else {
		return <div className={css(`height: 100%`)}></div>;
	}
};

export const Sidebar = Template.bind({});
Sidebar.args = {
	className: '',
};
