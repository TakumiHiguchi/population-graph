import {
	backGroundColor,
	textColor,
	borderRadiusSize,
	paddingSize,
	fluffyBackGroundColorTrans,
} from 'styles';

export const checkBoxWrapper = `
  display: inline-block;
  user-select: none;
`;

export const checkBoxLabel = `
  position: relative;
  display: inline-block;
  cursor: pointer;
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
    background-color: ${backGroundColor.secondary};
    content: '';
  }
  &:hover {
    ${fluffyBackGroundColorTrans.fast(
			backGroundColor.pastel.lightBlue.lightBlue3,
		)}
  }
`;

export const checkBox = `
  display: none;
  &:checked + label {
    &:before {
      ${fluffyBackGroundColorTrans.fast(
				backGroundColor.pastel.bluePurple.bluePurple15,
			)}
    }
    &:after {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0.15em;
      left: calc(${paddingSize.pc.small} + 0.3em);
      width: 0.25em;
      height: 0.5em;
      margin: auto;
      border-right: 2px solid ${backGroundColor.primary};
      border-bottom: 2px solid ${backGroundColor.primary};
      transform: rotate(45deg);
      content: '';
    }
  }

  &:not(:checked) + label {
    &:before {
      ${fluffyBackGroundColorTrans.normal(backGroundColor.secondary)}
    }
  }
`;
