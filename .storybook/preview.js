import * as NextImage from 'next/image';
import { backGroundColor } from '../src/styles';
import '../src/styles/global.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: 'default',
		values: [
			{
				name: 'default',
				value: backGroundColor.secondary,
			},
		],
	},
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});
