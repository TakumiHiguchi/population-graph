import {
	backGroundColor,
	borderRadiusSize,
	fluffyBackGroundColorTrans,
	textColor,
} from 'styles';

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
