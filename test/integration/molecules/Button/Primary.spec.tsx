import { render, screen, fireEvent } from '@testing-library/react';
import { css } from '@emotion/css';
import { Primary } from 'components/molecules/Button';
import '@testing-library/jest-dom';

describe('molecules/Button/Primaryのテスト', () => {
	it('classNameで渡したスタイルが含まれていること', () => {
		const className = css`
			background-color: red;
		`;
		render(<Primary className={className} onClick={() => jest.fn()} />);

		const container = screen.getByRole('button');
		expect(container).toHaveStyle('background-color: red;');
	});

	it('buttonをクリック時にonClickが呼ばれること', () => {
		const testMock = jest.fn();
		render(<Primary onClick={() => testMock()} />);

		const container = screen.getByRole('button');
		fireEvent.click(container);
		expect(testMock).toHaveBeenCalled();
	});
});
