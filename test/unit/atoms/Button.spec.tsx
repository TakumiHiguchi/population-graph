import { render, screen, fireEvent } from '@testing-library/react';
import { css } from '@emotion/css';
import Button from 'components/atoms/Button';
import '@testing-library/jest-dom';

describe('atoms/Buttonのテスト', () => {
	it('classNameで渡したスタイルが含まれていること', () => {
		const className = css`
			background-color: red;
		`;
		render(<Button className={className} onClick={() => jest.fn()} />);

		const container = screen.getByRole('button');
		expect(container).toHaveStyle('background-color: red;');
	});

	it('nameとvalueで渡した値がbuttonに含まれていること', () => {
		const name = 'test';
		const value = 'value';
		render(
			<form data-testid='dummy'>
				<Button name={name} value={value} onClick={() => jest.fn()} />
			</form>,
		);

		const container = screen.getByTestId('dummy');
		expect(container).toHaveFormValues({ [name]: value });
	});

	it('disabledで渡した値がbuttonに含まれていること', () => {
		const disabled = true;
		render(<Button disabled={disabled} onClick={() => jest.fn()} />);

		const container = screen.getByRole('button');
		expect(container).toBeDisabled();
	});

	it('childrenで渡したDOMがDOMに含まれていること', () => {
		render(
			<Button onClick={() => jest.fn()}>
				<div data-testid='dummy'>test</div>
			</Button>,
		);

		const container = screen.getByTestId('dummy');
		expect(container).toHaveTextContent('test');
	});

	it('buttonをクリック時にonClickが呼ばれること', () => {
		const testMock = jest.fn();
		render(<Button onClick={() => testMock()} />);

		const container = screen.getByRole('button');
		fireEvent.click(container);
		expect(testMock).toHaveBeenCalled();
	});
});
