import { ResasAPIResponseType } from 'types';

export const removeResasAPIResponseType = <T>(
	data: {
		[k: string]: ResasAPIResponseType<T>;
	}[],
): {
	[k: string]: T;
}[] => {
	return data.map((d) => {
		const key = Object.keys(d)[0];
		const newData = d[key as keyof typeof d].result;
		return { [key]: newData };
	});
};
