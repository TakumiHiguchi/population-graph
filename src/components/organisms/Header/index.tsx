import { css } from '@emotion/css';
import Text from 'components/atoms/Text';
import { layoutSize } from 'styles/size';

import { headerWrapper, headerH1 } from './styles';
const Header = () => {
	return (
		<div className={css(headerWrapper)}>
			<h1 className={css(headerH1)}>
				<Text
					text='都道府県別総人口推移グラフ'
					fontSize='1.2em'
					fontWeight='bold'
					lineHeight={layoutSize.pc.headerHeight}
				/>
			</h1>
		</div>
	);
};

export default Header;
