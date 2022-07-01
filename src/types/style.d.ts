import { PickSameTypes } from 'types';

export type PickStyleTypes<T> = PickSameTypes<Styles, T>;

export type Styles = {
	lineHeight?: string;
	fontSize?: string;
	fontWeight?: string;
	color?: string;
	fontFamily?: string;
	textDecoration?: string;
};
