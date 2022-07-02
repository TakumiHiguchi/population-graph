import useSWRImmutable from 'swr/immutable';
import { getPrefectures } from 'lib/api';
import { PrefectureType } from 'types';
import { isResasAPIFaildResponseType } from 'lib/typeGuard/api';
import { httpErrorHandler } from 'lib/httpErrorHandler';
import { generateCacheKey } from 'lib/cacheKey';

export const usePrefecturesApi = (apiKey: string) => {
	const empty: PrefectureType[] = [];

	if (apiKey == '') return { data: empty, loading: true, isError: false };

	const { data, error } = useSWRImmutable(
		generateCacheKey('prefectures', apiKey),
		async () => await getPrefectures(apiKey),
	);

	if (!data) return { data: empty, loading: true, isError: false };

	if (error || isResasAPIFaildResponseType(data)) {
		if (error) httpErrorHandler(error);
		if (isResasAPIFaildResponseType(data)) httpErrorHandler(data);
		return { data: empty, loading: false, isError: true };
	}

	return { data: data.result, loading: false, isError: false };
};
