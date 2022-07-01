import { TextType } from './types';
import { PickStyleTypes } from 'types';
import { fonts, textColor } from 'styles';

export const textWrapper = ({
	lineHeight = '1.5em',
	fontSize = '1em',
	fontWeight = 'normal',
	color = textColor.primary,
	fontFamily = fonts.default,
}: PickStyleTypes<TextType>) => `
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
  color: ${color};
  font-family: ${fontFamily};
  text-decoration-color: ${color};
`;
