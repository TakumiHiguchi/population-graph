import { render, screen } from '@testing-library/react';
import DefaultTemplate from 'components/templates/Default';

describe('templates/defaultのテスト', () => {
	it('都道府県別総人口推移グラフという文字が表示されていること', () => {
		const text = '都道府県別総人口推移グラフ';

		render(
			<DefaultTemplate>
				<div></div>
			</DefaultTemplate>,
		);

		const container = screen.queryByText(text);
		expect(container).toHaveTextContent(text);
	});
});
