import axios, { AxiosResponse } from 'axios';
import {
	PopulationCompositionType,
	ResasAPIResponseType,
	ResasAPIFaildResponseType,
} from 'types';

export const getPopulation = async (
	apiKey: string,
	prefCode: number,
): Promise<
	ResasAPIResponseType<PopulationCompositionType> | ResasAPIFaildResponseType
> => {
	const response: AxiosResponse<
		ResasAPIResponseType<PopulationCompositionType>
	> = await axios.get(
		process.env.RESAS_ENDPOINT + '/api/v1/population/composition/perYear',
		{
			params: {
				prefCode: prefCode,
			},
			headers: {
				'X-API-KEY': apiKey,
			},
		},
	);
	return response.data;
};
