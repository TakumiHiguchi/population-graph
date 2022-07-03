import { rest } from 'msw';
import { population } from './api/population';
import { prefectures } from './api/prefecture';

export const handlers = [
	rest.get(process.env.RESAS_ENDPOINT + '/api/v1/prefectures', prefectures),
	rest.get(
		process.env.RESAS_ENDPOINT + '/api/v1/population/composition/perYear',
		population,
	),
];
