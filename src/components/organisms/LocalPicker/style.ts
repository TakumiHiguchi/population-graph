import { paddingSize } from 'styles/size';

export const localPickerWrapper = `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
  grid-auto-rows: 1fr;
  gap: 0.5em;
  padding: ${paddingSize.pc.small} 0;
`;
