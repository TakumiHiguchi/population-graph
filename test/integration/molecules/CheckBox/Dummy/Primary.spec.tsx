import { render, screen } from '@testing-library/react';
import { css } from '@emotion/css';
import { Primary } from 'components/molecules/CheckBox/Dummy/Primary';
import '@testing-library/jest-dom';

describe('molecules/Dummyのテスト', () => {
	it('classNameで渡したスタイルが含まれていること', () => {
		const className = css`
			background-color: red;
		`;
		render(<Primary className={className} />);

		const container = screen.getByTestId('checkbox-dummy-primary');
		expect(container).toHaveStyle('background-color: red;');
	});
});
