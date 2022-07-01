import { rest } from 'msw';
import { prefectures } from './api/prefecture';

export const handlers = [
	rest.get(process.env.RESAS_ENDPOINT + '/api/v1/prefectures', prefectures),
];
