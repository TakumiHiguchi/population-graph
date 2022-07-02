export const generateCacheKey = (
	apiName: string,
	apiKey: string,
	id?: number,
) => {
	return `${apiName}-${apiKey.slice(0, 5)}-${id || 'index'}`;
};
