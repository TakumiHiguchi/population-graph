import { render, screen, fireEvent } from '@testing-library/react';
import { css } from '@emotion/css';
import CheckBox from 'components/atoms/Checkbox';
import '@testing-library/jest-dom';

describe('atoms/checkboxのテスト', () => {
	it('classNameで渡したスタイルが含まれていること', () => {
		const className = css`
			background-color: red;
		`;
		render(
			<CheckBox
				id='test'
				name='test'
				className={className}
				checked={false}
				value=''
				required={false}
				onChange={() => jest.fn()}
			/>,
		);

		const container = screen.getByRole('checkbox');
		expect(container).toHaveStyle('background-color: red;');
	});

	it('requiredで渡した値がrequiredに含まれていること', () => {
		const required = true;
		render(
			<CheckBox
				id='test'
				name='test'
				checked={false}
				value=''
				required={required}
				onChange={() => jest.fn()}
			/>,
		);

		const container = screen.getByRole('checkbox');
		expect(container).toBeRequired();
	});

	it('disabledで渡した値がdisabledに含まれていること', () => {
		const disabled = true;
		render(
			<CheckBox
				id='test'
				name='test'
				checked={false}
				value=''
				required={false}
				disabled={disabled}
				onChange={() => jest.fn()}
			/>,
		);

		const container = screen.getByRole('checkbox');
		expect(container).toBeDisabled();
	});

	it('checkboxをクリック時にonChangeが呼ばれること', () => {
		const testMock = jest.fn();
		render(
			<CheckBox
				id='test'
				name='test'
				checked={false}
				value=''
				required={false}
				onChange={(event) => testMock()}
			/>,
		);

		const container = screen.getByRole('checkbox');
		fireEvent.click(container);
		expect(testMock).toHaveBeenCalled();
	});
});
