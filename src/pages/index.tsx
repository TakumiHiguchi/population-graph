import type { NextPage } from 'next';
import DefaultTemplate from 'components/templates/Default';
import Chart from 'components/organisms/Chart';
import Sidebar from 'components/organisms/Sidebar';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import { usePopulaionDatas } from '../hooks/pages/usePopulationDatas';

const Home: NextPage = () => {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY
		? process.env.NEXT_PUBLIC_API_KEY
		: '';
	const prefectureApi = usePrefecturesApi(apiKey);
	const populationApi = usePopulaionDatas(apiKey);

	return (
		<DefaultTemplate>
			<Chart
				populations={populationApi.data}
				prefectures={prefectureApi.data}
				loading={populationApi.loading}
				nowLoadingDataCount={populationApi.nowLoadingCount}
			/>
			{!prefectureApi.loading && !prefectureApi.isError && (
				<Sidebar
					handleChangeCheckBoxState={(prefectureIds: number[]) =>
						populationApi.actions.setPopulationDatas(prefectureIds)
					}
					prefectures={prefectureApi.data}
				/>
			)}
		</DefaultTemplate>
	);
};

export default Home;
