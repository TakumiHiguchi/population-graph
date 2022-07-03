import { fluffyBackGroundColorTrans } from 'styles/animation';
import { backGroundColor } from 'styles/color';
import { borderRadiusSize } from 'styles/size';

export const buttonToggle = (
	toggle: boolean,
	bgColorTrue: string,
	bgColorFalse: string,
) => `
  background: ${backGroundColor.primary};
  border-radius: ${borderRadiusSize.pc.verySmall};
  border: 1px solid ${bgColorTrue};
  ${fluffyBackGroundColorTrans.fast(toggle ? bgColorTrue : bgColorFalse)}
  color: ${toggle ? bgColorFalse : bgColorTrue} !important;
  span {
    color: ${toggle ? bgColorFalse : bgColorTrue} !important;
  }
`;
