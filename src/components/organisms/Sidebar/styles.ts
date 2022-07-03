import { backGroundColor } from 'styles/color';
import { mediaQuery, scrollBarHide } from 'styles/global';
import { borderRadiusSize, layoutSize, paddingSize } from 'styles/size';

export const sidebarWrapper = `
  position: relative;
  width: ${layoutSize.pc.sidebar.width};
  height: 100%;
  background: ${backGroundColor.primary};
  border-radius: ${borderRadiusSize.pc.verySmall};
  padding: ${paddingSize.pc.normal1};
  overflow-y: scroll;
  ${scrollBarHide}
  ${mediaQuery.tab} {
    width: 100%;
    height: calc(calc(calc(100vh - ${layoutSize.tab.chart.height}) - ${layoutSize.tab.headerHeight}) - calc(${paddingSize.tab.normal1} * 3));
    margin-bottom: ${paddingSize.tab.normal1};
  }
  ${mediaQuery.sp} {
    height: calc(calc(calc(100vh - ${layoutSize.sp.chart.height}) - ${layoutSize.sp.headerHeight}) - calc(${paddingSize.tab.normal1} * 3));
    margin-bottom: ${paddingSize.tab.normal1};
  }
`;

export const prefectureWrapper = `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(101.2px, 1fr));
  grid-auto-rows: 1fr;
  gap: 0.05em;
  padding: ${paddingSize.pc.verySmall} 0 ${paddingSize.pc.small};
  ${mediaQuery.sp} {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

export const heddingWrapper = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const prefectureH2 = `
  font-size: 1em;
`;

export const prefectureAllSelecterButton = `
  padding: 0.05em 0.5em;
  margin: 0 0.2em;
`;

export const prefectureCreatedWrapper = `
  position: absolute;
  right: ${paddingSize.pc.normal1};
  bottom: ${paddingSize.pc.normal1};
  ${mediaQuery.tab} {
    position: static;
    padding: ${paddingSize.sp.verySmall} 0;
    text-align: right;
  }
`;
