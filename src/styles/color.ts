export const color = {
	White: '#fff',
	Gray20: 'f2f2f2',
	Gray50: '#f0f0f0',
	Gray80: '#c8c9ca',
	Gray100: '#abacae',
	Gray300: '#8b8e90',
	Gray400: '#6c6f72',
	Gray600: '#4d5154',
	Gray700: '#2f3438',
	Gray800: '#161c20',
	Black: '#333',
	Blue: '#0074af',
};

const pastelLightBlue = {
	lightBlue0: '#f9fcff',
	lightBlue3: '#eaf4ff',
	lightBlue6: '#dbedff',
	lightBlue9: '#cce5ff',
	lightBlue12: '#bcddff',
	lightBlue15: '#add6ff',
	lightBlue18: '#9eceff',
	lightBlue21: '#8ec6ff',
	lightBlue24: '#7fbfff',
};

const pastelBluePurple = {
	bluePurple0: '#f9f9ff',
	bluePurple3: '#eaeaff',
	bluePurple6: '#dbdbff',
	bluePurple9: '#ccccff',
	bluePurple12: '#bcbcff',
	bluePurple15: '#adadff',
	bluePurple18: '#9e9eff',
	bluePurple21: '#8e8eff',
	bluePurple24: '#7f7fff',
};

const pastel = {
	lightBlue: pastelLightBlue,
	bluePurple: pastelBluePurple,
};

export const textColor = {
	primary: color.Black,
	secondary: color.Gray300,
	white: color.White,
	pastel: pastel,
};

export const backGroundColor = {
	primary: color.White,
	secondary: color.Gray50,
	tertiary: color.Gray80,
	pastel: pastel,
	hover: {
		primary: color.Gray50,
		secondary: color.Gray80,
	},
};
