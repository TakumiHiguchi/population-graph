import { backGroundColor } from 'styles/color';
import { mediaQuery } from 'styles/global';
import { borderRadiusSize, layoutSize, paddingSize } from 'styles/size';

export const ChartWrapper = `
  position: relative;
  width: calc(calc(100% - ${layoutSize.pc.sidebar.width}) - ${paddingSize.pc.normal2});
  height: 100%;
  background: ${backGroundColor.primary};
  border-radius: ${borderRadiusSize.pc.verySmall};
  padding: ${paddingSize.pc.normal1};
  ${mediaQuery.tab} {
    width: 100%;
    height: ${layoutSize.tab.chart.height};
  }
  ${mediaQuery.sp} {
    width: 100%;
    height: ${layoutSize.sp.chart.height};
    padding: ${paddingSize.sp.normal1} 0;
  }
`;

export const loadingArea = (isLoading: boolean) => `
  display: flex;
  position: absolute;
  top: ${paddingSize.pc.normal1};
  right: ${paddingSize.pc.normal1};
  z-index: 10;
  opacity: ${isLoading ? 1 : 0};
  transition: opacity 0.2s linear;
`;

export const loadingSpinner = `
  margin: 0 0.6em;
`;

export const sourceTextWrapper = `
  position: absolute;
  left: ${paddingSize.pc.normal1};
  bottom: ${paddingSize.pc.normal1};
  ${mediaQuery.tab} {
    left: ${paddingSize.tab.normal1};
    bottom: ${paddingSize.tab.normal1};
  }
  ${mediaQuery.sp} {
    left: ${paddingSize.sp.normal1};
    bottom: ${paddingSize.sp.normal1};
  }
`;
