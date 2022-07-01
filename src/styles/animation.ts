export const fluffyBackGroundColorTrans = {
	fast: (color: string) => `
    background-color: ${color};
    transition: background-color 0.2s linear;
  `,
	normal: (color: string) => `
    background-color: ${color};
    transition: background-color 0.3s linear;
  `,
};
