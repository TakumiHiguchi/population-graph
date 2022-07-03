export const getArraysDiff = <T>(array01: T[], array02: T[]) => {
	const arr01 = [...array01];
	const arr02 = [...array02];
	return [...array01, ...array02].filter(
		(value) => !arr01.includes(value) || !arr02.includes(value),
	);
};
