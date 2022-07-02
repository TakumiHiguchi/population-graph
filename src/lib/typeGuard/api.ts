import { ResasAPIFaildResponseType } from 'types';

export const isResasAPIFaildResponseType = (
	arg: any,
): arg is ResasAPIFaildResponseType => {
	return (
		arg !== null &&
		typeof arg === 'object' &&
		typeof arg.statusCode === 'string'
	);
};
