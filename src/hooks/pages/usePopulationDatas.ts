import { removeResasAPIResponseType } from 'lib/api';
import { getArraysDiff } from 'lib/array';
import { generateCacheKey } from 'lib/cacheKey';
import { useCallback, useState } from 'react';
import { useSWRConfig } from 'swr';
import { PopulationCompositionType } from 'types';
import { usePopulaionApi } from 'hooks/api/population/usePopulationApi';

export const usePopulaionDatas = (apiKey: string) => {
	const { cache } = useSWRConfig();
	const [noChachedPrefectureIds, setNoChachedPrefectureIds] = useState<
		number[]
	>([]);
	const [chachedPrefectureIds, setChachedPrefectureIds] = useState<number[]>(
		[],
	);
	const { data, loading, isError } = usePopulaionApi(
		apiKey,
		noChachedPrefectureIds,
	);

	const chachedPopulationDatas =
		removeResasAPIResponseType<PopulationCompositionType>(
			chachedPrefectureIds.map((prefCode) =>
				cache.get(generateCacheKey('population', apiKey, prefCode)),
			),
		);

	const shapedChachePopulationDatas = chachedPopulationDatas.filter(
		(d) => typeof Object.values(d)[0] != 'undefined',
	);

	const setPopulationDatas = useCallback(
		(prefectureIds: number[]) => {
			const noChachedIds = prefectureIds.filter(
				(prefCode) =>
					!cache.get(generateCacheKey('population', apiKey, prefCode)),
			);
			const chachedIds = getArraysDiff(prefectureIds, noChachedIds);

			setNoChachedPrefectureIds(noChachedIds);
			setChachedPrefectureIds(chachedIds);
		},
		[apiKey, cache],
	);

	const returnDatas = [
		...removeResasAPIResponseType(data),
		...shapedChachePopulationDatas,
	];

	const actions = {
		setPopulationDatas,
	};

	return {
		data: returnDatas,
		loading,
		isError,
		nowLoadingCount: noChachedPrefectureIds.length,
		actions,
	};
};
