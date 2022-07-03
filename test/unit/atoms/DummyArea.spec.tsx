import { render, screen } from '@testing-library/react';
import DummyArea from 'components/atoms/DummyArea';
import '@testing-library/jest-dom';

describe('atoms/DummyAreaのテスト', () => {
	it('widthで渡した値がスタイルに含まれていること', () => {
		const width = '100px';
		render(
			<DummyArea width={width} height='100px' colorTo='red' colorFrom='blue' />,
		);

		const container = screen.getByTestId('dummy-area');
		expect(container).toHaveStyle(`width: ${width}`);
	});

	it('heightで渡した値がスタイルに含まれていること', () => {
		const height = '100px';
		render(
			<DummyArea width='10px' height={height} colorTo='red' colorFrom='blue' />,
		);

		const container = screen.getByTestId('dummy-area');
		expect(container).toHaveStyle(`height: ${height}`);
	});

	it('clortTo,colorFromで渡した値がスタイルのアニメーションに含まれていること', () => {
		const colorFrom = 'red';
		const colorTo = 'blue';
		const style = `
      animation-name: dummyArea-slowly;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
		`;

		render(
			<DummyArea
				width='10px'
				height='100px'
				colorTo={colorTo}
				colorFrom={colorFrom}
			/>,
		);

		const container = screen.getByTestId('dummy-area');
		expect(container).toHaveStyle(style);
	});
});
