import { render, screen } from '@testing-library/react';
import Header from 'components/organisms/Header';

describe('organisms/headerのテスト', () => {
	it('都道府県別総人口推移グラフという文字が表示されていること', () => {
		const text = '都道府県別総人口推移グラフ';

		render(<Header />);

		const container = screen.queryByText(text);
		expect(container).toHaveTextContent(text);
	});
});
