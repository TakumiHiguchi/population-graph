export const breakpoints: { [k: string]: number } = {
	sp: 580,
	tab: 1000,
};

export const mediaQuery = Object.keys(breakpoints).reduce(
	(after: { [k: string]: string }, bp: string) => ({
		...after,
		[bp]: `@media screen and (max-width: ${breakpoints[bp]}px)`,
	}),
	{},
);

export const scrollBarHide = `
  -ms-overflow-style: none;
  scrollbar-width: none;
	&::-webkit-scrollbar {
    display:none;
  }
`;
