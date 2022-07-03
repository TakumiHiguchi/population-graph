export type PopulationType = {
	year: number;
	value: number;
};

export type PopulationsType = {
	label: string;
	data: PopulationType[];
};

export type PopulationCompositionType = {
	boundaryYear: number;
	data: PopulationsType[];
};
