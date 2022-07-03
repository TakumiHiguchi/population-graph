import {
	fluffyBackGroundColorAnim,
	fluffyBackGroundColorTrans,
} from 'styles/animation';
import { backGroundColor, textColor } from 'styles/color';
import { borderRadiusSize, paddingSize } from 'styles/size';

export const checkBoxWrapper = `
  display: inline-block;
  user-select: none;
`;

export const checkBoxLabel = `
  position: relative;
  display: inline-block;
  padding: ${paddingSize.pc.verySmall};
  padding-left: calc(1.7em + ${paddingSize.pc.verySmall});
  color: ${textColor.primary};
  border-radius: ${borderRadiusSize.pc.verySmall};
  ${fluffyBackGroundColorTrans.normal(backGroundColor.primary)}

  &:before {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${paddingSize.pc.small};
    width: 1em;
    height: 1em;
    margin: auto;
    ${fluffyBackGroundColorAnim.slowly(
			'dummyArea-slowly',
			backGroundColor.secondary,
			backGroundColor.hover.secondary,
			'infinite',
		)}
    content: '';
  }
`;
