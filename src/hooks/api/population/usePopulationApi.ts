import useSWRInfinite from 'swr/infinite';
import { getPopulation } from 'lib/api';
import {
	PopulationCompositionType,
	ResasAPIFaildResponseType,
	ResasAPIResponseType,
} from 'types';
import { isResasAPIFaildResponseType } from 'lib/typeGuard/api';
import { httpErrorHandler } from 'lib/httpErrorHandler';
import { generateCacheKey } from 'lib/cacheKey';

export const usePopulaionApi = (
	apiKey: string,
	prefectureIds: number[],
	fetchInterval: number = 100,
) => {
	const getKey = (pageIndex: number) => {
		if (prefectureIds.length === pageIndex) return null;
		return generateCacheKey('population', apiKey, prefectureIds[pageIndex]);
	};

	const { data, error } = useSWRInfinite(
		getKey,
		async (pageIndex: string) => {
			const regexp = new RegExp(`population-${apiKey.slice(0, 5)}-`, 'g');
			const prefCode = pageIndex.replace(regexp, '');
			const result = await getPopulation(apiKey, parseInt(prefCode));
			await new Promise((resolve) => setTimeout(resolve, fetchInterval));
			return { [prefCode]: result };
		},
		{
			revalidateIfStale: false,
			initialSize: 47,
		},
	);

	const errorHandle = (
		data: {
			[x: string]:
				| ResasAPIResponseType<PopulationCompositionType>
				| ResasAPIFaildResponseType;
		}[],
		swrError: any,
	) => {
		/*
			Union型の配列でfilter時に型を判別してくれないため
			ResasAPIResponseType<PopulationCompositionType> | ResasAPIFaildResponseTypeasを
			ResasAPIFaildResponseTypeasにするためにasを使用
		*/
		const errors = data
			.filter((d) => isResasAPIFaildResponseType(Object.values(d)[0]))
			.map((d) => Object.values(d)[0]) as ResasAPIFaildResponseType[];
		if (swrError) httpErrorHandler(swrError);
		if (errors.length > 0) httpErrorHandler(errors[0]);
		return swrError || errors.length > 0;
	};

	if (!data) return { data: [], loading: true, isError: false };
	if (errorHandle(data, error))
		return { data: [], loading: false, isError: true };

	/* Union型の配列でerrorHandleで型を判別してくれないためasを使用 */
	const _data = data as {
		[x: string]: ResasAPIResponseType<PopulationCompositionType>;
	}[];

	return { data: _data, loading: false, isError: false };
};
