import { backGroundColor, layoutSize, mediaQuery, paddingSize } from 'styles';

export const headerWrapper = `
  width: 100%;
  height: ${layoutSize.pc.headerHeight};
  padding: 0 ${paddingSize.pc.normal3};
  background-color: ${backGroundColor.primary};
  ${mediaQuery.sp} {
    padding: 0 ${paddingSize.sp.normal1};
  }
`;

export const headerH1 = `
  height: 100%;
  font-size: 1rem;
  span {
    display: block;
  }
`;
