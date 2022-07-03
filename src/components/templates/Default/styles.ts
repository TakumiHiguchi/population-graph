import { backGroundColor } from 'styles/color';
import { mediaQuery } from 'styles/global';
import { layoutSize, paddingSize, textSize } from 'styles/size';

export const defaultTemplateWrapper = `
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  font-size: ${textSize.pc};
  background-color: ${backGroundColor.secondary};
`;

export const defaultTemplateInner = `
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - ${layoutSize.pc.headerHeight});
  padding: ${paddingSize.pc.normal2} ${paddingSize.pc.normal3};
  ${mediaQuery.tab} {
    flex-direction: column-reverse;
    font-size: ${textSize.tab};
    padding: ${paddingSize.tab.normal2} ${paddingSize.tab.normal2};
  }
  ${mediaQuery.sp} {
    font-size: ${textSize.sp};
    padding: ${paddingSize.sp.normal1};
  }
`;
