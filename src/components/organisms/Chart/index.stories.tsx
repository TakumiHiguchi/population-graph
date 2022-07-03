import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './index';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import { PaddingWrapper } from 'components/atoms/StorybookPaddingWrapper';
import { usePopulaionDatas } from 'hooks/pages/usePopulationDatas';
import { useEffect } from 'react';

export default {
	title: 'organisms/Chart',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY
		? process.env.NEXT_PUBLIC_API_KEY
		: '';
	const prefectureApi = usePrefecturesApi(apiKey);
	const populationApi = usePopulaionDatas(apiKey);

	useEffect(() => {
		populationApi.actions.setPopulationDatas([1, 2]);
	}, [populationApi.actions]);

	return (
		<PaddingWrapper>
			<Component
				{...args}
				prefectures={prefectureApi.data}
				populations={populationApi.data}
			/>
		</PaddingWrapper>
	);
};

export const Chart = Template.bind({});
