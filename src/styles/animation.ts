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

const fluffyBackGroundColorKeyFlame = (
	key: string,
	colorFrom: string,
	colorTo: string,
) => `
  @keyframes ${key} {
    0% {
      background-color: ${colorFrom};
    }
    50% {
      background-color: ${colorTo};
    }
    100% {
      background-color: ${colorFrom};
    }
  }
`;

export const fluffyBackGroundColorAnim = {
	slowly: (
		key: string,
		colorFrom: string,
		colorTo: string,
		iterationCount: string,
	) => `
    ${fluffyBackGroundColorKeyFlame(key, colorFrom, colorTo)}
      animation-name: ${key};
      animation-duration: 3s;
      animation-iteration-count: ${iterationCount};
      animation-fill-mode: forwards;
  `,
};
