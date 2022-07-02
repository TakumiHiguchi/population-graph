import type { NextPage } from 'next';
import Sidebar from 'components/organisms/Sidebar';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import DefaultTemplate from 'components/templates/Default';

const Home: NextPage = () => {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY
		? process.env.NEXT_PUBLIC_API_KEY
		: '';
	const prefectureApi = usePrefecturesApi(apiKey);

	return (
		<DefaultTemplate>
			<div></div>
			{!prefectureApi.loading && !prefectureApi.isError && (
				<Sidebar
					handleChangeCheckBoxState={(prefectureIds: number[]) =>
						console.log(prefectureIds)
					}
					prefectures={prefectureApi.data}
				/>
			)}
		</DefaultTemplate>
	);
};

export default Home;
