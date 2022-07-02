import axios, { AxiosResponse } from 'axios';
import {
	PrefectureType,
	ResasAPIResponseType,
	ResasAPIFaildResponseType,
} from 'types';

export const getPrefectures = async (
	apiKey: string,
): Promise<
	ResasAPIResponseType<PrefectureType[]> | ResasAPIFaildResponseType
> => {
	const response: AxiosResponse<ResasAPIResponseType<PrefectureType[]>> =
		await axios.get(process.env.RESAS_ENDPOINT + '/api/v1/prefectures', {
			headers: {
				'X-API-KEY': apiKey,
			},
		});
	return response.data;
};
