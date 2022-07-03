import { fluffyBackGroundColorAnim } from 'styles/animation';

export const dummyAreaWrapper = (
	width: string,
	height: string,
	colorFrom: string,
	colorTo: string,
) => `
  width: ${width};
  height: ${height};
  ${fluffyBackGroundColorAnim.slowly(
		'dummyArea-slowly',
		colorFrom,
		colorTo,
		'infinite',
	)}
`;
