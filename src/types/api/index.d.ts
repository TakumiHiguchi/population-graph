export type ResasAPIResponseType<T> = {
	message: string;
	result: T;
};

export type ResasAPIFaildResponseType = {
	statusCode: string;
	message: string;
	description: string;
};

export * from './prefecuture';
