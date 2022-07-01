import React from 'react';
import { SafeHydrateType } from './types';

const SafeHydrate = (props: SafeHydrateType) => {
	return <>{props.children}</>;
};

export default SafeHydrate;
