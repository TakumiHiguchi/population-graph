import { render, screen, fireEvent } from '@testing-library/react';
import { css } from '@emotion/css';
import { Toggle } from 'components/molecules/Button';
import '@testing-library/jest-dom';

describe('molecules/Button/Secondaryのテスト', () => {
	it('classNameで渡したスタイルが含まれていること', () => {
		const className = css`
			background-color: red;
		`;
		render(
			<Toggle
				toggle={true}
				bgColorTrue=''
				bgColorFalse=''
				className={className}
				onClick={() => jest.fn()}
			/>,
		);

		const container = screen.getByRole('button');
		expect(container).toHaveStyle('background-color: red;');
	});

	it('buttonをクリック時にonClickが呼ばれること', () => {
		const testMock = jest.fn();
		render(
			<Toggle
				toggle={true}
				bgColorTrue=''
				bgColorFalse=''
				onClick={() => testMock()}
			/>,
		);

		const container = screen.getByRole('button');
		fireEvent.click(container);
		expect(testMock).toHaveBeenCalled();
	});

	it('toggleがtrueの時に適切なスタイルが含まれていること', () => {
		const bgColorTrue = 'red';
		const bgColorFalse = 'blue';

		render(
			<Toggle
				toggle={true}
				bgColorTrue={bgColorTrue}
				bgColorFalse={bgColorFalse}
				onClick={() => jest.fn()}
			/>,
		);

		const container = screen.getByRole('button');

		expect(container).toHaveStyle(`border: 1px solid ${bgColorTrue};`);
		expect(container).toHaveStyle(`background-color: ${bgColorTrue};`);
		expect(container).toHaveStyle(`color: ${bgColorFalse}`);
	});

	it('toggleがfalseの時に適切なスタイルが含まれていること', () => {
		const bgColorTrue = 'red';
		const bgColorFalse = 'blue';

		render(
			<Toggle
				toggle={false}
				bgColorTrue={bgColorTrue}
				bgColorFalse={bgColorFalse}
				onClick={() => jest.fn()}
			/>,
		);

		const container = screen.getByRole('button');

		expect(container).toHaveStyle(`border: 1px solid ${bgColorTrue};`);
		expect(container).toHaveStyle(`background-color: ${bgColorFalse};`);
		expect(container).toHaveStyle(`color: ${bgColorTrue}`);
	});
});
