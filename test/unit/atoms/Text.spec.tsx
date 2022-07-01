import { render, screen } from '@testing-library/react';
import Text from 'components/atoms/Text';
import '@testing-library/jest-dom';
import { css } from '@emotion/css';

describe('atoms/Textのテスト', () => {
	it('textで渡した値が表示されていること', () => {
		const text = 'SampleText';
		render(<Text text={text} />);

		const container = screen.queryByText(text);
		expect(container).toHaveTextContent(text);
	});

	it('classNameで渡したスタイルが含まれていること', () => {
		const className = css`
			background-color: red;
		`;
		render(<Text className={className} text='テスト' />);

		const container = screen.queryByText('テスト');
		expect(container).toHaveStyle('background-color: red;');
	});

	it('lineHeightで渡した値がスタイルに含まれていること', () => {
		render(<Text lineHeight='1em' text='テスト' />);

		const container = screen.queryByText('テスト');
		expect(container).toHaveStyle('line-height: 1em;');
	});

	it('fontSizeで渡した値がスタイルに含まれていること', () => {
		render(<Text fontSize='0.5em' text='テスト' />);

		const container = screen.queryByText('テスト');
		expect(container).toHaveStyle('font-size: 0.5em;');
	});

	it('fontWeightで渡した値がスタイルに含まれていること', () => {
		render(<Text fontWeight='bold' text='テスト' />);

		const container = screen.queryByText('テスト');
		expect(container).toHaveStyle('font-weight: bold;');
	});

	it('colorで渡した値がスタイルに含まれていること', () => {
		render(<Text color='red' text='テスト' />);

		const container = screen.queryByText('テスト');
		expect(container).toHaveStyle('color: red;');
	});

	it('fontFamilyで渡した値がスタイルに含まれていること', () => {
		render(<Text fontFamily='Hiragino Kaku Gothic Pro' text='テスト' />);

		const container = screen.queryByText('テスト');
		expect(container).toHaveStyle('font-family: Hiragino Kaku Gothic Pro;');
	});
});
